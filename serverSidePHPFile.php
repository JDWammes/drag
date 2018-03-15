<?php
$num = $_POST["putSubHere"];
$mTurkCode = $_POST["putmTurkCodeHere"];
$data = $_POST["putDataHere"];

file_put_contents("../../data/drag/testData.txt", $num . ",", FILE_APPEND);
file_put_contents("../../data/drag/testData.txt", $mTurkCode . ",", FILE_APPEND);
file_put_contents("../../data/drag/testData.txt", $data . "\n", FILE_APPEND);

file_put_contents("../../data/drag/myDataTest.txt", $mTurkCode . ",", FILE_APPEND);

include('lastPage.html');
?>
