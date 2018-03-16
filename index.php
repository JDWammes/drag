<!doctype html>
<html lang="en">
<?php
$id = $_GET['id'];
?>
<?php if(strstr($_SERVER['HTTP_REFERER'],"[origin page here]")) : ?>
<head>
<meta charset="UTF-8">
<title>Drag and Drop</title>
<script src='../extra/jquery-1.11.3.js'></script>

<style type="text/css">

    .dragme {
        position:absolute;
        z-index: 5;
        width: 120px;
        height: 120px;
        cursor: move;
    }

    #circle {
      position: absolute;
      left: 100px;
      top: 100px;
      width: 1000px;
      height: 1000px;
      -webkit-border-radius: 500px;
      -moz-border-radius: 500px;
      border-radius: 500px;
      background: white;
    }
    #rectangle {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 1400px;
      height: 1200px;
      background: black;
    }

    #make_sure {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 1400px;
      height: 1200px;
      background: rgba(0,0,0,0.4);
    }


    #circle2 {
      position: absolute;
      left: 5px;
      top: 5px;
      width: 990px;
      height: 990px;
      -webkit-border-radius: 495px;
      -moz-border-radius: 495px;
      border-radius: 495px;
      background: black;
    }

    }
    #warn {
      position: absolute;
      left: 575px;
      top: 575px;
    }

    #refresh {
   	  position:absolute;
   	  right:250px;
   	  top:50px;
   	}

   	#double_check {
   	  position:absolute;
   	  right:250px;
   	  top:150px;
   	}

   	#go_back {
   	  position:absolute;
   	  right:250px;
   	  top:200px;
   	}

    div{
      display:none;
      visibility:hidden;
      font-size:16pt;
    }
</style>

</head>
<body style="background-color:black;">

<form id = 'sendtoPHP' method = 'post' action = '../extra/serverSidePHPFile.php'>
<input type = 'hidden' name = 'putSubHere' id = 'putSubHere' value = '<?php echo $id;?>'/>
<input type = 'hidden' name = 'putmTurkCodeHere' id = 'putmTurkCodeHere' value = ''/>
<input type = 'hidden' name = 'putDataHere' id = 'putDataHere' value = ''/>
</form>

<div id="rectangle" style="z-index: -5">
    <button id="refresh" onclick = "confirm(); ">Click here when finished!</button>
    <div id="circle" style="z-index: -4">
        <div id="circle2" style="z-index: -3">
            <div id="warn">

            </div>
        </div>
    </div>
</div>

<div id="page1">
<p><button onclick = "runTrial(); ">Start trial!</button></p>
</div>

<div id="lastPage" style="font-size:16pt; color:white; background-color:black;">
	<p align="center">Thank you for participating.</p>
	<p align="center"><b>To receive your credit, please click the "FINISH THE STUDY" button below.</b></p>
	<p align="center"><button id = 'submit'>FINISH THE STUDY</button></p>
</div>

<div id="make_sure" style="z-index: -10, background-color:rgba(0, 0, 0, 0.1);">
<button id="double_check" onclick = "clearTrial(); ">Are you sure? Click here to confirm.</button>
<button id="go_back" onclick = "goBack(); ">...or here to go back.</button>
</div>

<script type='text/javascript' language='javscript' src='../extra/drag_func.js'></script>

</body>
<?php else : ?>
<h1>Unavailable</h1>
<?php endif; ?>
