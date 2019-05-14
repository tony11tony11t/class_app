# -*- coding: utf-8 -*-
import urllib.request as req
import urllib.parse
import json
import bs4
import time
import re
from selenium import webdriver
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import *
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import pymysql
import sys  

#即為獲取到的PHP傳入python的入口引數
#此處為獲取帳號密碼 [0]帳號  [1]密碼
params = sys.argv[1:] 


portal="https://portalx.yzu.edu.tw/PortalSocialVB/Login.aspx" 
# 開啟網頁
driver=webdriver.Chrome("chromedriver/chromedriver")
driver.get(portal)
#輸入帳號
username=driver.find_element_by_name("Txt_UserID")
username.send_keys(params[0])
#輸入密碼
password=driver.find_element_by_name("Txt_Password")
password.send_keys(params[1])
#登入鍵
driver.find_element_by_name("ibnSubmit").click()
#等待5秒再點擊【歷年學習檔】
time.sleep(5)
try:
 btn_class=driver.find_element_by_id("tdS0")
except:
 driver.quit()
 import sys
 sys.exit()
else:
 btn_class.click()




#找尋四大領域的課號
Number=driver.find_elements_by_css_selector("#divDutyCoursePage>table>tbody>tr>td:nth-child(3)")
for n in Number:
    if n.text[0:2]=="GN" or n.text[0:2]=="GS" or n.text[0:2]=="LS" or n.text[0:2]=="LE":
        print(n.text)
name=driver.find_element_by_id("MainBar_lbnUserName").text

import pymysql
db = pymysql.connect("localhost","root","t8711111","class_app" )
cursor = db.cursor()
sql="SELECT * FROM member WHERE username='"+params[0]+"'"
try:
    cursor.execute(sql)
    if(cursor.rowcount==0):
        sql="INSERT INTO member(username, name, grade, GS, GN, LS, LE, recommend1, recommend2, recommend3) VALUES ('"+params[0]+"','"+name+"','','','','','','','','')"
        try:
                cursor.execute(sql)
        except:
                print("already")
except:
        print("error")

db.commit()
db.close()

driver.quit()

