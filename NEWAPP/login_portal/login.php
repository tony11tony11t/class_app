<?php
mb_internal_encoding('utf-8');
$username="s1052032";
$passwd="t8711111";


$params = "$username $passwd"; #傳遞給python指令碼的入口引數  
$path="python loginportal.py "; //需要注意的是：末尾要加一個空格

#等同於命令`python python.py 引數`，並接收列印出來的資訊 
exec($path.$params,$output);

header('Access-Control-Allow-Origin: *');
//連結資料庫
$db = mysqli_connect("localhost", "root", "t8711111")
or die("MySQL server connect error!<br/>");
$dbname = "class_app";
if( !mysqli_select_db($db, $dbname) )
die("Cannot open $dbname database <br/>");
mysqli_query($db, "SET NAMES UTF8");//設定編碼
$result=array();

if(empty($output))
    $result[0]="error";
else{
    for($i=0;$i<sizeof($output);$i++){
        $sql = "SELECT number,name FROM class_info WHERE number='$output[$i]' GROUP BY name"; //建立SQL指令
        $rows = mysqli_query( $db, $sql); //執行SQL查詢
        
        $num = mysqli_num_rows( $rows ); //取得查詢後的記錄數
        if($num>0){
            $r = mysqli_fetch_row( $rows );
            array_push($result,$r);
        }else{} 
    }
}
echo json_encode($result);
?>