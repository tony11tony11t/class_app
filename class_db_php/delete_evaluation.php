<?php
header('Access-Control-Allow-Origin: *');
//連結資料庫
 $db = mysqli_connect("localhost", "root", "t8711111")
    or die("MySQL server connect error!<br/>");
 $dbname = "class_app";
 if( !mysqli_select_db($db, $dbname) )
    die("Cannot open $dbname database <br/>");
 else
    print "db $dbname open success <br/>";
mysqli_query($db, "SET NAMES UTF8");//設定編碼


//接收ajax傳送過來的資料
$semester=$_POST["semester"];
$number=$_POST["number"];
$term=$_POST["term"];
$username=$_POST["username"];

$sql = "DELETE FROM evaluation WHERE number=$number AND username=$username AND semester=$semester AND term=$term"; //建立SQL指令
$result = mysqli_query( $db, $sql); //執行SQL查詢

 mysqli_close($db);
?>