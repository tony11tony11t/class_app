import urllib.request as req
import json
import bs4
import time
import re
from selenium import webdriver
from selenium.webdriver.support.ui import Select
import pymysql

#資料庫連線設定
db=pymysql.connect("localhost","root","t8711111","class_app" )
#建立游標操作
cursor=db.cursor()




src="https://portal.yzu.edu.tw/cosSelect/index.aspx?D=G"
#y=年號  s=學年 id=課號 c=班別
y="105"
s="1"
searchweb="https://portal.yzu.edu.tw/cosSelect/Cos_Plan.aspx?"
# 開啟網頁
driver=webdriver.Chrome("chromedriver/chromedriver")
driver.get(src)

#選取年度
select_year=Select(driver.find_element_by_name("DDL_YM"))
select_year.select_by_value("105,1  ")

#選取通識
select_class=Select(driver.find_element_by_name("DDL_Dept"))
select_class.select_by_value("901")

#選取年級
select_class=Select(driver.find_element_by_name("DDL_Degree"))
select_class.select_by_value("1")

#按下搜尋按鈕
driver.find_element_by_name("Button1").click()

#取得課號
classNum=[]
ClassNumber1=driver.find_elements_by_css_selector("table.form1 .record2>td:nth-child(2) a")
ClassNumber2=driver.find_elements_by_css_selector("table.form1 .hi_line>td:nth-child(2) a")
for number in ClassNumber1:
    numbertxt=number.text
    if numbertxt[0:2]=="GN" or numbertxt[0:2]=="GS" or numbertxt[0:2]=="LS" or numbertxt[0:2]=="LE" or numbertxt[0:2]=="ID":
        classNum.append(numbertxt)
for number in ClassNumber2:
    numbertxt=number.text
    if numbertxt[0:2]=="GN" or numbertxt[0:2]=="GS" or numbertxt[0:2]=="LS" or numbertxt[0:2]=="LE" or numbertxt[0:2]=="ID":
        classNum.append(numbertxt)

print("-----開始取資料-----")
#x利用get的方式傳送資料連到每個課程的分頁去取得資料
for number in classNum:
    #進入分頁
    driver.get(searchweb+"y="+y+"&s="+s+"&id="+number[0:5]+"&c="+number[6])
    #等一秒再執行，怕還沒載入好
    time.sleep(1)

    #取得資料-課名
    Classname=driver.find_element_by_css_selector("#Cos_info > table > tbody > tr:nth-child(2) > td:nth-child(6)")
    tempclassname=Classname.text.splitlines()   #因為會有中文跟英文，所以利用splitlines切開，然後取list第一項
    #取得資料-老師
    Teachername=driver.find_element_by_css_selector("#Cos_info > table > tbody > tr:nth-child(2) > td>a")
    tempteachername=Teachername.text.splitlines()
    #取得資料-作業成績-期中
    hw_cen=driver.find_element_by_css_selector("#Table6>tbody>tr:nth-child(3)>td:nth-child(3)").text
    #取得資料-作業成績-期末
    hw_all=driver.find_element_by_css_selector("#Table6>tbody>tr:nth-child(3)>td:nth-child(4)").text
    #取得資料-平時成績-期中
    nor_cen=driver.find_element_by_css_selector("#Table6>tbody>tr:nth-child(4)>td:nth-child(3)").text
    #取得資料-平時成績-期末
    nor_all=driver.find_element_by_css_selector("#Table6>tbody>tr:nth-child(4)>td:nth-child(4)").text
    #取得資料-期中考-期中
    mid_cen=driver.find_element_by_css_selector("#Table6>tbody>tr:nth-child(5)>td:nth-child(3)").text
    #取得資料-期中考-期末
    mid_all=driver.find_element_by_css_selector("#Table6>tbody>tr:nth-child(5)>td:nth-child(4)").text
    #取得資料-期末考-期末
    fin_all=driver.find_element_by_css_selector("#Table6>tbody>tr:nth-child(6)>td:nth-child(4)").text


    sql="INSERT INTO class_info(semester, number, term,name,teacher_name,hw_cen,hw_all,nor_cen,nor_all,mid_cen,mid_all,fin_all) VALUES ("+y+s+",'"+number[0:5]+"','"+number[6]+"','"+tempclassname[0]+"','"+tempteachername[0]+"','"+hw_cen+"','"+hw_all+"','"+nor_cen+"','"+nor_all+"','"+mid_cen+"','"+mid_all+"','"+fin_all+"')"
    print(sql)
    #執行語法
    try:
        cursor.execute(sql)
        print('success')
    except:
        print('有error的課號:'+number[0:5])

db.close()
driver.close()





