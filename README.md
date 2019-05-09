# 好課來相報APP製作
### 後端建置任務
<ul>
<li>1.建立課程資料庫(V)</li>
<li>2.建立評價資料庫(V)</li>
<li>3.python抓取課程資料到資料庫(V)</li>
<li>4.php與python交互，達到登入portal功能()</li>
<li>5.在歷年學習檔中取得以修得通識課程名稱存入會員資料庫()</li>
<li>6.利用php傳送課程資料到前端(搜尋)(V)</li>
<li>7.利用php傳送課程評價到前端(搜尋)(V)</li>
<li>8.新增課程評價(新增)(V)</li>
<li>9.刪除課程評價(刪除)(V)</li>
<li>10.建立會員資料庫(V)</li>
</ul>

### 前端建置任務
<ul>
<li>1.登入頁()</li>
<li>2.首頁()</li>
<li>3.搜尋頁()</li>
<li>4.個人頁()</li>
<li>5.我要推薦-1()</li>
<li>6.我要推薦-2()</li>
<li>7.我要推薦-3()</li>
<li>8.我要推薦-確認頁()</li>
<li>9.課程詳細資訊()</li>
<li>10.課程列表()</li>
</ul>

## 前端注意事項
>1.命名規則:(此頁簡稱)-(物件名稱)<br/>
  例如:首頁的按鈕---->  index-button<br/>
       搜尋的打字框---->  search-input<br/>
>2.盡量都用class做命名<br/>
>3.CSS排版的時候最好不用px(微調是可以的)，盡量使用%跟vw、vh<br/>
>4.還是要先拉完html再拉CSS哦<br/>
>5.在開始製作前、先把下面的東西放在head裡面<br/>

    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
 >6.引入css檔
 
    <link rel=stylesheet type="text/css" href="css/wen.css">
    
 ## 後端資料庫操作檔案
 #### 會員
 >insert_user.php   加入會員<br/>
 #### 課程列表
 >search_class.php  搜尋課程<br/>
 >search_classterm.php 類別課程<br/>
 >get_class_info.php 取得課程資訊<br/>
 #### 課程評價
 >get_class_evaluation.php 取得課程評價<br/>
 >insert_evaluation.php 推薦課程<br/>
