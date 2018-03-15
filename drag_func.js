    var data=[['']];
    var z=5
    var xpos=0
    var ypos=0
    var lastbutton="cloudface1"
    var string=0
    var trial=0
    var loc_dict = {};
    var duration = 'blank'


    function shuffle(array){
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex){

	        // Pick a remaining element...
	        randomIndex = Math.floor(Math.random() * currentIndex);
	        currentIndex -= 1;

	        // And swap it with the current element.
	        temporaryValue = array[currentIndex];
	        array[currentIndex] = array[randomIndex];
	        array[randomIndex] = temporaryValue;
        }
        return array;
    }


    var images1 = ["c83-101_0", "c83-101_14", "c83-101_29", "c83-101_43", "c83-101_57", "c83-101_71", "c83-101_86", "c83-101_100", "c11-5_0", "c11-5_14", "c11-5_29", "c11-5_43", "c11-5_57", "c11-5_71", "c11-5_86", "c11-5_100", "c102-109_0", "c102-109_14", "c102-109_29", "c102-109_43", "c102-109_57", "c102-109_71", "c102-109_86", "c102-109_100", "c17-85_0", "c17-85_14", "c17-85_29", "c17-85_43", "c17-85_57", "c17-85_71", "c17-85_86", "c17-85_100", "c47-34_0", "c47-34_14", "c47-34_29", "c47-34_43", "c47-34_57", "c47-34_71", "c47-34_86", "c47-34_100", "c40-20_0", "c40-20_14", "c40-20_29", "c40-20_43", "c40-20_57", "c40-20_71", "c40-20_86", "c40-20_100", "c79-97_0", "c79-97_14", "c79-97_29", "c79-97_43", "c79-97_57", "c79-97_71", "c79-97_86", "c79-97_100", "c56-68_0", "c56-68_14", "c56-68_29", "c56-68_43", "c56-68_57", "c56-68_71", "c56-68_86", "c56-68_100"]
    var images_base = ["c83-101_0", "c83-101_14", "c83-101_29", "c83-101_43", "c83-101_57", "c83-101_71", "c83-101_86", "c83-101_100", "c11-5_0", "c11-5_14", "c11-5_29", "c11-5_43", "c11-5_57", "c11-5_71", "c11-5_86", "c11-5_100", "c102-109_0", "c102-109_14", "c102-109_29", "c102-109_43", "c102-109_57", "c102-109_71", "c102-109_86", "c102-109_100", "c17-85_0", "c17-85_14", "c17-85_29", "c17-85_43", "c17-85_57", "c17-85_71", "c17-85_86", "c17-85_100", "c47-34_0", "c47-34_14", "c47-34_29", "c47-34_43", "c47-34_57", "c47-34_71", "c47-34_86", "c47-34_100", "c40-20_0", "c40-20_14", "c40-20_29", "c40-20_43", "c40-20_57", "c40-20_71", "c40-20_86", "c40-20_100", "c79-97_0", "c79-97_14", "c79-97_29", "c79-97_43", "c79-97_57", "c79-97_71", "c79-97_86", "c79-97_100", "c56-68_0", "c56-68_14", "c56-68_29", "c56-68_43", "c56-68_57", "c56-68_71", "c56-68_86", "c56-68_100"]
    // var images1 = ["l2-63_0", "l2-63_14", "l2-63_29", "l2-63_43", "l2-63_57", "l2-63_71", "l2-63_86", "l2-63_100", "l62-58_0", "l62-58_14", "l62-58_29", "l62-58_43", "l62-58_57","l62-58_71", "l62-58_86","l62-58_100", "l3-61_0", "l3-61_14", "l3-61_29", "l3-61_43", "l3-61_57", "l3-61_71", "l3-61_86", "l3-61_100", "l53-57_0", "l53-57_14", "l53-57_29", "l53-57_43", "l53-57_57", "l53-57_71", "l53-57_86", "l53-57_100", "l30-24_0", "l30-24_14", "l30-24_29", "l30-24_43","l30-24_57",  "l30-24_71", "l30-24_86", "l30-24_100", "l12-14_0", "l12-14_14", "l12-14_29", "l12-14_43", "l12-14_57", "l12-14_71", "l12-14_86", "l12-14_100", "l59-23_0", "l59-23_14", "l59-23_29", "l59-23_43", "l59-23_57", "l59-23_71", "l59-23_86", "l59-23_100", "l32-9_0", "l32-9_14", "l32-9_29", "l32-9_43", "l32-9_57", "l32-9_71", "l32-9_86", "l32-9_100"]
    // var images_base = ["l2-63_0", "l2-63_14", "l2-63_29", "l2-63_43", "l2-63_57", "l2-63_71", "l2-63_86", "l2-63_100", "l62-58_0", "l62-58_14", "l62-58_29", "l62-58_43", "l62-58_57","l62-58_71", "l62-58_86","l62-58_100", "l3-61_0", "l3-61_14", "l3-61_29", "l3-61_43", "l3-61_57", "l3-61_71", "l3-61_86", "l3-61_100", "l53-57_0", "l53-57_14", "l53-57_29", "l53-57_43", "l53-57_57", "l53-57_71", "l53-57_86", "l53-57_100", "l30-24_0", "l30-24_14", "l30-24_29", "l30-24_43","l30-24_57", "l30-24_71", "l30-24_86", "l30-24_100", "l12-14_0", "l12-14_14", "l12-14_29", "l12-14_43", "l12-14_57", "l12-14_71", "l12-14_86", "l12-14_100", "l59-23_0", "l59-23_14", "l59-23_29", "l59-23_43", "l59-23_57", "l59-23_71", "l59-23_86", "l59-23_100", "l32-9_0", "l32-9_14", "l32-9_29", "l32-9_43", "l32-9_57", "l32-9_71", "l32-9_86", "l32-9_100"]
    shuffle(images_base);
    var images2 = images_base.slice(0,13);
    var lastbutton = images_base[0];
    var images3 = images_base.slice(13,25);
    var images4 = images_base.slice(25,38);
    var images5 = images_base.slice(38,51);
    var images6 = images_base.slice(51,64);
    shuffle(images_base);
    var images7 = images_base.slice(0,13);
    var images8 = images_base.slice(13,25);
    var images9 = images_base.slice(25,38);
    var images10 = images_base.slice(38,51);
    var images11 = images_base.slice(51,64);
    shuffle(images_base);
    var images12 = images_base.slice(0,13);
    var images13 = images_base.slice(13,25);
    var images14 = images_base.slice(25,38);
    var images15 = images_base.slice(38,51);
    var images16 = images_base.slice(51,64);
    shuffle(images_base);
    var images17 = images_base.slice(0,13);
    var images18 = images_base.slice(13,25);
    var images19 = images_base.slice(25,38);
    var images20 = images_base.slice(38,51);
    var images21 = images_base.slice(51,64);
    shuffle(images_base);
    var images22 = images_base.slice(0,13);
    var images23 = images_base.slice(13,25);
    var images24 = images_base.slice(25,38);
    var images25 = images_base.slice(38,51);
    var images26 = images_base.slice(51,64);
    shuffle(images_base);
    var images27 = images_base.slice(0,13);
    var images28 = images_base.slice(13,25);
    var images29 = images_base.slice(25,38);
    var images30 = images_base.slice(38,51);
    var images31 = images_base.slice(51,64);
    shuffle(images_base);
    var images32 = images_base.slice(0,13);
    var images33 = images_base.slice(13,25);
    var images34 = images_base.slice(25,38);
    var images35 = images_base.slice(38,51);
    var images36 = images_base.slice(51,64);
    shuffle(images_base);
    var images37 = images_base.slice(0,13);
    var images38 = images_base.slice(13,25);
    var images39 = images_base.slice(25,38);
    var images40 = images_base.slice(38,51);
    var images41 = images_base.slice(51,64);
    shuffle(images_base);
    var images42 = images_base.slice(0,13);
    var images43 = images_base.slice(13,25);
    var images44 = images_base.slice(25,38);
    var images45 = images_base.slice(38,51);
    var images46 = images_base.slice(51,64);
    shuffle(images_base);
    var images47 = images_base.slice(0,13);
    var images48 = images_base.slice(13,25);
    var images49 = images_base.slice(25,38);
    var images50 = images_base.slice(38,51);
    var images51 = images_base.slice(51,64);
    shuffle(images_base);
    var images52 = images_base.slice(0,13);
    var images53 = images_base.slice(13,25);
    var images54 = images_base.slice(25,38);
    var images55 = images_base.slice(38,51);
    var images56 = images_base.slice(51,64);
    shuffle(images_base);
    var images57 = images_base.slice(0,13);
    var images58 = images_base.slice(13,25);
    var images59 = images_base.slice(25,38);
    var images60 = images_base.slice(38,51);
    var images61 = images_base.slice(51,64);
    var imagesRd1 = [images2, images3, images4, images5, images6]
    var imagesRd2 = [images7, images8, images9, images10, images11]
    var imagesRds = [images12, images13, images14, images15, images16, images17, images18, images19, images20, images21, images22, images23, images24, images25, images26, images27, images28, images29, images30, images31, images32, images33, images34, images35, images36, images37, images38, images39, images40, images41, images42, images43, images44, images45, images46, images47, images48, images49, images50, images51, images52, images53, images54, images55, images56, images57, images58, images59, images60, images61]
    shuffle(imagesRds);
    shuffle(imagesRd1);
    shuffle(imagesRd2);
    // to ensure at least two ratings each
    var images = imagesRd1.concat(imagesRd2, imagesRds)

    function displayAllImages(image_list) {
        for (i=0;i<image_list.length;i++) {
        document.getElementById('rectangle').innerHTML += "<img src='/../extra/" + image_list[i] + "A.png' id='" + image_list[i] + "A' class='dragme'>";
        document.getElementById('rectangle').innerHTML += "<img src='/../extra/" + image_list[i] + "B.png' id='" + image_list[i] + "B' class='dragme'>";
        }
    }

    function randomString(length, chars){
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    }

    function findNewPoint(x, y, angle, distance) {
      var result = {};

      result.x = Math.round(Math.cos(angle * Math.PI / 180) * distance + x);
      result.y = Math.round(Math.sin(angle * Math.PI / 180) * distance + y);

      return result;
    }

    function clearCoords(){
	  document.getElementById('placeholder').querySelector("#last_word").value = "";
	  document.getElementById('placeholder').querySelector("#num_words").value = "";
    }

    function confirm() {
      if (Object.keys(loc_dict).length > images[trial-1].length + images[trial-1].length -1) {
        showPage("make_sure");
      } else {
        warning('You have not placed all of the images', 'red');
      }

    }

    function goBack() {
      hidePage("make_sure");
    }

    function logData(){
      var locations = JSON.stringify(loc_dict)
	  data[trial] = [trial,duration,locations];
	  // console.log(data)
    }

    function clearTrial(){
      clearwarning();
      if (typeof clear !== 'undefined') {
        clearTimeout(clear);
      }
      clearTimeout(warn1);
      clearTimeout(warn2);
      clearTimeout(warn3);
      now = new Date();
      clearTime = now.getTime();
      duration = (clearTime-trialStartTime);
      totalDuration = (clearTime-expStartTime);
      hidePage("make_sure");
      hidePage("rectangle");
      hidePage("circle");
      hidePage("circle2");
      logData();
      var all_ims = document.getElementsByClassName('dragme');
      while (all_ims[0]) { all_ims[0].parentNode.removeChild(all_ims[0]) };
      // if (trial<images.length) {
      if (totalDuration<2700000) {
        runTrial();
      }  else if (trial<10) {
        runTrial();
      } else {
        showPage("lastPage");
      }
    }

    function showPage(div){
      document.getElementById(div).style.visibility ='visible';
      document.getElementById(div).style.display='inline';
    }

    function clearwarning(){
      var all_warns = document.getElementsByClassName('warn');
      while (all_warns[0]) { all_warns[0].parentNode.removeChild(all_warns[0]) };
    }

    function warning(text, color){
      document.getElementById('rectangle').innerHTML += "<h3 align='center' class='warn' style='color:" + color + "; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; position:absolute; z-index: 1000; top: 40%; left: 40%; font-family: Arial'>" + text + "</h2>";
      clear = setTimeout(function(){clearwarning()},2500);
    }

    function hidePage(div){
      document.getElementById(div).style.visibility ='hidden';
      document.getElementById(div).style.display='none';
    }

    function startDrag(e) {
            // determine event object
            if (!e) {
                var e = window.event;
            }
            if(e.preventDefault) e.preventDefault();

            // IE uses srcElement, others use target
            targ = e.target ? e.target : e.srcElement;

            if (targ.className != 'dragme') {return};
            // calculate event X, Y coordinates
                offsetX = e.clientX;
                offsetY = e.clientY;

            // assign default values for top and left properties
            if (!targ.style.left) { targ.style.left='0px'};
            if (!targ.style.top) { targ.style.top='0px'};
            if (!z) {targ.style.zIndex=5};

            // calculate integer values for top and left
            // properties
            coordX = parseInt(targ.style.left);
            coordY = parseInt(targ.style.top);
            targ.style.zIndex=z++;
            drag = true;

            // move div element
                document.onmousemove=dragDiv;
            return false;

        }
        function dragDiv(e) {
            if (!drag) {return};
            if (!e) { var e= window.event};
            // var targ=e.target?e.target:e.srcElement;
            // move div element
            if (coordX+e.clientX-offsetX > 0 && coordX+e.clientX-offsetX < 1200 && coordY+e.clientY-offsetY > 0 && coordY+e.clientY-offsetY < 1200) {
                targ.style.left=coordX+e.clientX-offsetX+'px';
                targ.style.top=coordY+e.clientY-offsetY+'px';
                xpos=coordX+e.clientX-offsetX;
                ypos=coordY+e.clientY-offsetY;
                // lastbutton=$.extend( true, {}, targ.id[0]);
                lastbutton=JSON.parse(JSON.stringify(targ.id));
              }
            return false;
        }
        function stopDrag() {
            drag=false;
            var z=targ.style.zIndex;
            loc_dict[lastbutton]=(xpos+','+ypos)

        }
        function runTrial() {
            hidePage("page1");
            showPage("rectangle");
            showPage("circle");
            showPage("circle2");
            displayAllImages(images[trial]);
            trial++;
            $(document).ready(function() {
                $('.dragme').each(function () {
                    var randN = Math.floor(Math.random() * 360);
                    var newPoint = findNewPoint(600, 600, randN, 550);
                    var onsetx=(newPoint['x']-60)+'px';
                    var onsety=(newPoint['y']-60)+'px';
                    $(this).css("top", onsety);
                    $(this).css("left", onsetx);
                });
            });
            for (var loc in loc_dict) {
                if (loc_dict.hasOwnProperty(loc)) {
                    delete loc_dict[loc];
                }
            }
            trialStartTime = new Date();
			trialStartTime = trialStartTime.getTime();
            document.onmousedown = startDrag;
            document.onmouseup = stopDrag;
            warn1 = setTimeout(function(){warning('1 minute left', 'orange')},240000);
            warn2 = setTimeout(function(){warning('30 seconds left', 'red')},270000);
            warn3 = setTimeout(function(){clearTrial()},300000);
        }
        window.onload = function(){
          showPage("page1");
          expStartTime = new Date();
		  expStartTime = expStartTime.getTime();
        }

        $('#submit').click(function(){
            var rString = randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

            theTurkCode=document.getElementById('putmTurkCodeHere');
            theDATA=document.getElementById('putDataHere');

            theTurkCode.value=rString;
            theDATA.value=data;


            theForm=document.getElementById('sendtoPHP');
            theForm.submit();
        });


