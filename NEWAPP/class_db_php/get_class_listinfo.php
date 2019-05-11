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
$number=$_POST["number"];
$term=$_POST["term"];

$sql = "SELECT name FROM class_info WHERE number='$number' AND term='$term' GROUP BY number,term"; //建立SQL指令
$rows = mysqli_query( $db, $sql); //執行SQL查詢
$num = mysqli_num_rows( $rows ); //取得查詢後的記錄數

$result=array();
for($i=0;$i<$num;$i++){
   $r = mysqli_fetch_row( $rows );
   $result[$i]=$r;
}
echo json_encode($result);
 mysqli_close($db);
?>