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
$semester=$_POST["semester"];
$number=$_POST["number"];
$term=$_POST["term"];
$funny=$_POST["funny"];
$self=$_POST["self"];
$interactive=$_POST["interactive"];
$practice=$_POST["practice"];
$theory=$_POST["theory"];
$total=$_POST["total"];
$reason=$_POST["reason"];
$content=$_POST["content"];
$score=$_POST["score"];
$other=$_POST["other"];

$sql = "INSERT INTO evaluation('username', 'semester', 'number', 'term', 'funny', 'self', 'interactive', 'practice', 'theory', 'total', 'reason', 'content', 'score', 'other') VALUES ('$username', '$semester', '$number', '$term', '$funny', '$self', '$interactive', '$practice', '$theory', '$total', '$reason', '$content', '$score', '$other')"; //建立SQL指令
$result = mysqli_query( $db, $sql); //執行SQL查詢

 mysqli_close($db);
?>