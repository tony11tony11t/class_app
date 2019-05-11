<?php
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
$username=$_POST["username"];
$GSClass=$_POST["GSClass"];
$GNClass=$_POST["GNClass"];
$LSClass=$_POST["LSClass"];
$LEClass=$_POST["LEClass"];
$recommend1=$_POST["recommend1"];
$recommend2=$_POST["recommend2"];
$recommend3=$_POST["recommend3"];

$sql = "INSERT INTO member(username,GS,GN,LS,LE,recommend1,recommend2,recommend3) VALUES ('$username','$GSClass','$GNClass','$LSClass','$LEClass','$recommend1','$recommend2','$recommend3')"; //建立SQL指令
$result = mysqli_query( $db, $sql); //執行SQL查詢

 mysqli_close($db);
?>