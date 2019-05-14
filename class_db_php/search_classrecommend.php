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


$sql = "SELECT recommend1,recommend2,recommend3 FROM member WHERE username='$username'"; //建立SQL指令
$rows = mysqli_query( $db, $sql); //執行SQL查詢
$r = mysqli_fetch_row( $rows );
$recom=array($r[0],$r[1],$r[2]);
$result=array();
$saveitem=0;
for($i=0;$i<3;$i++){
   $sql = "SELECT * FROM funny_term WHERE name='".$recom[$i]."'"; //建立SQL指令
   $conditional = mysqli_query( $db, $sql); //執行SQL查詢
   $con = mysqli_fetch_row( $conditional ); 
   $sql = "SELECT * FROM class_count WHERE ".$con[1]." ORDER BY RAND() LIMIT 4"; //建立SQL指令
   $funny_con = mysqli_query( $db, $sql); //執行SQL查詢
   $num = mysqli_num_rows( $funny_con ); //取得查詢後的記錄數
    if($num>0){
       for($j=0;$j<$num;$j++){
        $fcon = mysqli_fetch_row( $funny_con );
        $result[$saveitem]=$fcon;
           $saveitem++;
        } 
    }else{
       $sql = "SELECT * FROM class_count ORDER BY RAND() LIMIT 4"; //建立SQL指令
       $funny_con = mysqli_query( $db, $sql); //執行SQL查詢
       for($j=0;$j<4;$j++){
        $fcon = mysqli_fetch_row( $funny_con );
        $result[$saveitem]=$fcon;
           $saveitem++;
       }
    }
    
}


echo json_encode($result);

 mysqli_close($db);
?>
