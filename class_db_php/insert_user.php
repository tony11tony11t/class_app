<?php
header('Access-Control-Allow-Origin: *');
//連結資料庫
 $db = mysqli_connect("localhost", "root", "t8711111")
    or die("MySQL server connect error!<br/>");
 $dbname = "class_app";
 if( !mysqli_select_db($db, $dbname) )
    die("Cannot open $dbname database <br/>");
mysqli_query($db, "SET NAMES UTF8");//設定編碼


//接收ajax傳送過來的資料
$username=$_POST["username"];
$GSClass=$_POST["GSClass"];
$GNClass=$_POST["GNClass"];
$LSClass=$_POST["LSClass"];
$LEClass=$_POST["LEClass"];
$recommend1=$_POST["recommend1"];
$recommend2=$_POST["recommend2"];
$recommend3=$_POST["recommend3"];

//建立SQL指令
$sql="UPDATE member SET GS='$GSClass',GN='$GNClass',LS='$LSClass',LE='$LEClass',recommend1='$recommend1',recommend2='$recommend2',recommend3='$recommend3' WHERE username='$username'";
$result = mysqli_query( $db, $sql); //執行SQL查詢

 mysqli_close($db);
?>