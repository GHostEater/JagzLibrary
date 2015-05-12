<?php
header("Content-Type: application/json");

$host = 'localhost';
$db = 'library';
$db_user = 'root';
$db_pass = '';
$con = mysql_connect($host,$db_user,$db_pass) or die("Could Not Connect");
$db_select = mysql_select_db($db,$con);

$result = mysql_query("SELECT * FROM author");
$n_rows = mysql_num_rows($result);

for ($i=0; $i<$n_rows; $i++){
	$row = mysql_fetch_array($result);
	extract($row);

	$resultsArray[$i] = array( 'author_id' => $sn,
							   'name' => $name,
							   'date_birth' => $date_birth,
							   'bio' => $bio,
							   'author_img' => $author_img);
							   
}

echo json_encode($resultsArray);
?>