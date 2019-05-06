import urllib.request as req
import json
import bs4
import time
from selenium import webdriver
from selenium.webdriver.support.ui import Select

#src="https://portal.yzu.edu.tw/cosSelect/index.aspx?D=G"
# # 開啟網頁
# driver=webdriver.Chrome("chromedriver/chromedriver")
# driver.get("https://portal.yzu.edu.tw/cosSelect/index.aspx?D=G")

# #選取年度
# select_year=Select(driver.find_element_by_name("DDL_YM"))
# select_year.select_by_value("108,1  ")

# #選取通識
# select_class=Select(driver.find_element_by_name("DDL_Dept"))
# select_class.select_by_value("901")

# #選取年級
# select_class=Select(driver.find_element_by_name("DDL_Degree"))
# select_class.select_by_value("1")

# #按下搜尋按鈕
# driver.find_element_by_name("Button1").click()

# #取得課號
# ClassNumber1=driver.find_elements_by_css_selector("table.form1 .record2>td:nth-child(2) a")
# ClassNumber2=driver.find_elements_by_css_selector("table.form1 .hi_line>td:nth-child(2) a")
# for number in ClassNumber1:
#    print(number.text)
# for number in ClassNumber2:
#    print(number.text)
# #取得課名
# print("------接下來是課名-----------")
# ClassName1=driver.find_elements_by_css_selector("table.form1 .record2>td:nth-child(4) a:nth-child(1)")
# ClassName2=driver.find_elements_by_css_selector("table.form1 .hi_line>td:nth-child(4) a:nth-child(1)")
# for number in ClassName1:
#    print(number.text)
# for number in ClassName2:
#    print(number.text)

#driver.close()


portal="https://portalx.yzu.edu.tw/PortalSocialVB/Login.aspx" 
# 開啟網頁
driver=webdriver.Chrome("chromedriver/chromedriver")
driver.get(portal)
#輸入帳號
username=driver.find_element_by_name("Txt_UserID")
username.send_keys("s1052032")
#輸入密碼
password=driver.find_element_by_name("Txt_Password")
password.send_keys("t8711111")
#登入鍵
driver.find_element_by_name("ibnSubmit").click()
#等待3秒再點擊【歷年學習檔】
time.sleep(3)
driver.find_element_by_id("tdS0").click()


