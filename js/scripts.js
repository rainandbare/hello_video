var app = {};
app.scrollReady = false;
app.deactivateButton = false;
app.ismobile = false;
app.boxes = document.querySelectorAll('.box');
app.people = document.querySelectorAll('.person');
app.contactOpen = false;

$(function(){
  app.init();
});

app.init = function(){
	console.log("its working");
	app.responsive();
	app.handwritting();
	app.fullMenu();
	app.contactGo();
	app.reelGo();
	app.contactAnimation();
	app.resizeWindow();
	app.folderControl();
	app.openVideoModal();
}

app.responsive = function(){
	var w = $( window ).width();
	if (w < 1101){ 
		window.setTimeout(addPop, 1500);
		app.ismobile = true;
	} else {
		console.log("it is not a mobile device");		
	}
	function addPop(){
		$("header#teaser #logo button").addClass('pop-out');
		window.setTimeout(app.action(), 3000);
		window.setTimeout(app.bounce, 2250);
	}
}

app.action = function(){
	$('section#subheader').addClass("activateSubheader");
		 $('section#logo button').addClass("out");

		var paths = $('path:not(defs path)');
		paths.each(function(i, e) {
	    	e.style.strokeDasharray = e.style.strokeDashoffset = e.getTotalLength();
		});
		var arrow = $('.arrow');
		var tl = new TimelineMax();
		tl.add([
	    	TweenLite.to(paths.eq(0), 0.5, {strokeDashoffset: 0, delay: 0.2}), //S
	    	TweenLite.to(paths.eq(1), 0.5, {strokeDashoffset: 0, delay: 0.5}), //ay
	    	TweenLite.to(paths.eq(2), 0.5, {strokeDashoffset: 0, delay: 1.0}), //H1
	    	TweenLite.to(paths.eq(3), 0.5, {strokeDashoffset: 0, delay: 1.1}), //H2
	    	TweenLite.to(paths.eq(4), 0.5, {strokeDashoffset: 0, delay: 1.4}), //ello
	    	TweenLite.to(paths.eq(5), 0.5, {strokeDashoffset: 0, delay: 1.7}), //o2
	    	TweenLite.to(paths.eq(6), 0.5, {strokeDashoffset: 0, delay: 1.8}), //q1
	    	TweenLite.to(paths.eq(7), 0.5, {strokeDashoffset: 0, delay: 1.8}), //q2
	    	TweenLite.to(paths.eq(8), 0.5, {strokeDashoffset: 0, delay: 1.8}), //q3
	    	TweenLite.to(paths.eq(9), 0.5, {strokeDashoffset: 0, delay: 1.8})  //q4
		]);
}

app.handwritting = function(){
	if (!app.ismobile){

	$('button#activateSubheader').on("click", function(){
		app.action();
		app.scrollReady = true;
		if(!app.deactivateButton){
			window.setTimeout(app.bounce, 2250);
		}
	});
	} else {
		console.log("is mobile");
	}
}

app.fullMenu = function(){

		$('button#activateFullMenu').on("click", function(){
			$('header').addClass("inCorner");
		});
}

app.bounce = function(){
	$(".arrow").addClass("display");
	$("main").css("display", "flex");
	$("footer").addClass("up");
	var bounce_obj = $(".bounce");
	var duration = 1;
	var tl = new TimelineMax({repeat:-1, repeatDelay:1});

	tl.to(bounce_obj, 0, { y:0, ease:Bounce.easeIn }, "bounceup")
		.to(bounce_obj, duration / 2, { y:+8, ease:Bounce.easeOut }, "bounceme");
	app.scroll();
	tl.pause		
}

app.scroll = function(){
	if (app.scrollReady === true){
		$( window ).scroll(function(e) {
			 	$('html, body').animate({
	         		scrollTop: 0
	     		}, 2000);
	     		$("html, body").addClass("doNotMove");
	    		$("button#activateSubheader").addClass("shrink");
	    		$("header#teaser #subheader").addClass("shrink");
	    		$("header#teaser #logo").addClass("shrink");
	    		$("header#teaser").addClass("shrink");
	    		app.deactivateButton = true;
	    		$(".arrow").removeClass("display").removeClass("bounce");
	    		window.setTimeout(app.svgsArrive, 200);
		});
		$( '.arrow' ).on("click", function(e) {
			 	$('html, body').animate({
	         		scrollTop: 0
	     		}, 2000);
	     		$("html, body").addClass("doNotMove");
	    		$("button#activateSubheader").addClass("shrink");
	    		$("header#teaser #subheader").addClass("shrink");
	    		$("header#teaser #logo").addClass("shrink");
	    		$("header#teaser").addClass("shrink");
	    		app.deactivateButton = true;
	    		$(".arrow").removeClass("display").removeClass("bounce");
	    		window.setTimeout(app.svgsArrive, 200);
		});
	}
}

app.svgsArrive = function(){
	$("div#phone-div").addClass("arrive");
    $("div#video-div").addClass("arrive");
}

app.contactGo = function(){
	$("svg #cell").on("click", function(){
		$("div#phone-div").addClass("flyAway");
    	$("div#video-div").addClass("flyAway");
    	$("header#teaser.shrink").addClass("flyAway");
    	$("section#contactInfo").addClass("contactArrive");
    	app.contactOpen = true;
	});
	$("div.closeContact").on("click", function(){
		$("div#phone-div").removeClass("flyAway");
    	$("div#video-div").removeClass("flyAway");
    	$("header#teaser.shrink").removeClass("flyAway");
    	$("section#contactInfo").removeClass("contactArrive");
    	app.contactOpen = false;
	});

}

app.reelGo = function(){
	var firstClick = true;
	var reelControl = document.getElementById('reelControl');
	var iframe = reelControl.querySelector('iframe');
	var reelPlayer = new Vimeo.Player(iframe);

	
		$("svg #cassette").on("click", function(){
				handleReelArrive();
		});
		$("text#We-make-videos-good").on("click", function(){
				handleReelArrive();
		});
	



	function handleReelArrive(){
		if(app.contactOpen){
			return;
		}
		$("div#phone-div").removeClass("arrive");
    	$("div#video-div").removeClass("arrive");
    	$("section#videoPlayer").addClass("playerArrive");
    	if(firstClick){
	    	app.boxes.forEach(function(box){
				app.makeBoxIntoCanvas(box)
			});
		firstClick = false;
    	}
		reelPlayer.play();
	}
	$("div.closePlayer").on("click", function(){
	   	vimeoWrap = $('#vimeoWrap');
	   	vimeoWrap.html( vimeoWrap.html() );
		$("div#phone-div").addClass("arrive");
    	$("div#video-div").addClass("arrive");
    	$("section#videoPlayer").removeClass("playerArrive");
		reelPlayer.pause();
	});
	
}

app.contactAnimation = function(){
	$("svg #cell").on("mouseover", function(){
		$("path#text-contact").toggle();
		$("path#text-hello").toggle();
	});
	$("svg #cassette").on("mouseover", function(){
		wheelsTurn();
	});
	$("text#We-make-videos-good").on("mouseover", function(){
		wheelsTurn();
	});
	$("text#We-make-videos-good").on("mouseout", function(){
		tl2.pause();
		tl3.pause();
	});
	$("svg #cassette").on("mouseout", function(){
		tl2.pause();
		tl3.pause();
	});
	function wheelsTurn(){
				var shine1 = $("path.shine.middle.left"),
					shine2 = $("path.shine.top.left"),
					shine3 = $("path.shine.bottom.left"),
					shine4 = $("path.shine.top.right"),
					shine5 = $("path.shine.middle.right"),
					shine6 = $("path.shine.bottom.right"),
					path1 = [{x:0, y:0}, {x:-3, y:0.5}, {x:-5, y:1}],
					path2 = [{x:0, y:0}, {x:-5, y:0.5}, {x:-7, y:1}],
					path3 = [{x:0, y:0}, {x:-0.5, y:-1}, {x:1, y:-3}],
					path3_5 = [{x:0, y:0}, {x:0.5, y:0.5}, {x:2, y:0}],
					path4 = [{x:0, y:0}, {x:0.5, y:5}, {x:-2, y:9}],
					path5 = [{x:0, y:0}, {x:0.5, y:3}, {x:-1, y:5}],
					path5_5 = [{x:0, y:0}, {x:0.5, y:-1}, {x:1, y:-2}],
					path6 = [{x:0, y:0}, {x:-0.5, y:0.5}, {x:-1, y:1}];
					tl2 = new TimelineMax({repeat: -1 , yoyo: true});
					tl2.add([
				    	TweenLite.to(shine1, 1, {bezier:{curviness: 0.7, values:path1}, ease:Bounce.easeOut, delay: 0}), 
				    	TweenLite.to(shine2, 1, {bezier:{curviness: 1, values:path2}, ease:Power1.easeOut, delay: 0.4}), 
				    	TweenLite.to(shine3, 1, {bezier:{curviness: 1.5, values:path3}, ease:Bounce.easeOut, delay: 0}),
				    	TweenLite.to(shine3, 1, {bezier:{curviness: 0.5, values:path3_5}, ease:Power1.easeInOut, delay: 1}) 
					]);
					tl3 = new TimelineMax({repeat: -1 , yoyo: true});
					tl3.add([
				    	TweenLite.to(shine6, 1, {bezier:{curviness: 1, values:path6}, ease:Power0.easeInOut, delay: 0}),
				    	TweenLite.to(shine4, 1.5, {bezier:{curviness: 0.7, values:path4}, rotation: 20, ease:Expo.easeInOut, delay: 0.5}), 
				    	TweenLite.to(shine5, 1, {bezier:{curviness: 1, values:path5}, rotation: 10, ease:Power1.easeOut, delay: 0}), 
				    	TweenLite.to(shine5, 1.5, {bezier:{curviness: 1, values:path5_5}, ease:Power1.easeOut, delay: 1}) 
					]);
			};
}
app.resizeWindow = function(){
	if(!app.ismobile){
		 $(window).resize(function() {
        if(this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function() {
            $(this).trigger('resizeEnd');
        }, 400);
    });
	 $(window).bind('resizeEnd', function() {
    // window hasn't changed size in 400ms
    console.log("resized");
    //reload window to include right screen size & animations
    window.location.reload(true);
	});
	}	
}

app.folderControl = function(){
	var firstClick = true;
	$('div.folder').on('click', function(){
		$('div.folder').removeClass('activeFolder');
		$(this).addClass('activeFolder');
		if($(this).hasClass('who')){
			if(firstClick){
				app.people.forEach(function(person){
					app.makeBioIntoCanvas(person);
				});
			firstClick = false;
			}
		}
	})
}

app.makeBoxIntoCanvas = function(element){;
	// console.dir(element);
	var body = document.getElementById('videoControl');

	var imageCanvas = document.createElement('canvas');
	var imageCanvasID = "imageCanvas" + element.id;
	imageCanvas.setAttribute("id", imageCanvasID);
	var imageCanvasContext = imageCanvas.getContext('2d');

	var lineCanvas = document.createElement('canvas');
	var lineCanvasID = "lineCanvas" + element.id;
	lineCanvas.setAttribute("id", lineCanvasID);
	var lineCanvasContext = lineCanvas.getContext('2d');

	var pointLifetime = 2000;
	var points = [];
	
	start();

	/**
	 * Attaches event listeners and starts the effect.
	 */
	function start() {
	  element.addEventListener('mousemove', onMouseMove);
	  window.addEventListener('resize', resizeCanvases);
	  element.appendChild(imageCanvas);
	  resizeCanvases();
	  tick();
	}

	/**
	 * Records the user's cursor position.
	 *
	 * @param {!MouseEvent} event
	 */
	function onMouseMove(event) {
	  points.push({
	    time: Date.now(),
	    x: event.clientX,
	    y: event.clientY,
	  });
	}

	/**
	 * Resizes both canvases to fill the window.
	 */
	function resizeCanvases() {
	  imageCanvas.width = lineCanvas.width = element.clientWidth;
	  imageCanvas.height = lineCanvas.height = element.clientHeight;
	}

	/**
	 * The main loop, called at ~60hz.
	 */
	function tick() {
	  // Remove old points
	  points = points.filter(function(point) {
	    var age = Date.now() - point.time;
	    return age < pointLifetime;
	  });

	  drawLineCanvas();
	  drawImageCanvas();
	  requestAnimationFrame(tick);
	}

	/**
	 * Draws a line using the recorded cursor positions.
	 *
	 * This line is used to mask the original image.
	 */
	function drawLineCanvas() {
	  var minimumLineWidth = 60;
	  var maximumLineWidth = 200;
	  var lineWidthRange = maximumLineWidth - minimumLineWidth;
	  var maximumSpeed = 50;

	  // lineCanvasContext.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
	  lineCanvasContext.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
	  lineCanvasContext.lineCap = 'round';
	  lineCanvasContext.shadowBlur = 30;
	  lineCanvasContext.shadowColor = '#000';
	  
	  for (var i = 1; i < points.length; i++) {
	    var point = points[i];
	    var previousPoint = points[i - 1];

	    // Change line width based on speed
	    var distance = getDistanceBetween(point, previousPoint);
	    var speed = Math.max(0, Math.min(maximumSpeed, distance));
	    var percentageLineWidth = (maximumSpeed - speed) / maximumSpeed;
	    lineCanvasContext.lineWidth = minimumLineWidth + percentageLineWidth * lineWidthRange;

	    
	    
	    var scrollTop = body.scrollTop;

		// Fade points as they age
	    var age = Date.now() - point.time;
	    var opacity = (pointLifetime - age) / pointLifetime;

	    lineCanvasContext.strokeStyle = 'rgba(0, 0, 0, ' + opacity + ')';
	    
 		

    	lineCanvasContext.beginPath();
	    lineCanvasContext.moveTo(previousPoint.x - imageCanvas.offsetLeft, previousPoint.y - imageCanvas.offsetTop + scrollTop);
	    lineCanvasContext.lineTo(point.x - imageCanvas.offsetLeft, point.y - imageCanvas.offsetTop + scrollTop);
	    lineCanvasContext.stroke();

	  }
	}

	/**
	 * @param {{x: number, y: number}} a
	 * @param {{x: number, y: number}} b
	 * @return {number} The distance between points a and b
	 */
	function getDistanceBetween(a, b) {
	  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
	}

	/**
	 * Draws the original image, masked by the line drawn in drawLineToCanvas.
	 */
	function drawImageCanvas() {
		var title = element.children[0].innerHTML.toUpperCase();
		var director = element.children[1].innerText;

	  // Emulate background-size: cover
	  var width = imageCanvas.width;
	  var height = imageCanvas.height;
	  // var height = imageCanvas.width / image.naturalWidth * image.naturalHeight;
	  
	  // if (height < imageCanvas.height) {
	  //   width = imageCanvas.height / image.naturalHeight * image.naturalWidth;
	  //   height = imageCanvas.height;
	  // }

	  imageCanvasContext.clearRect(0, 0, width, height);
	  imageCanvasContext.globalCompositeOperation = 'source-over';

	  imageCanvasContext.font = '32px Langdon';
	  imageCanvasContext.textBaseline = 'top';
	  imageCanvasContext.fillStyle = '#211D1F';
	  imageCanvasContext.fillRect(0, 0, width, height);
	  imageCanvasContext.textAlign = "center";  
	  imageCanvasContext.fillStyle = '#FFF';
	  imageCanvasContext.fillText(title, imageCanvas.width/2, 50);
	  imageCanvasContext.font = '22px Mark My Words';
	  imageCanvasContext.strokeStyle = "#0072BC";
	  imageCanvasContext.lineWidth = 2;
	  imageCanvasContext.beginPath();
	  imageCanvasContext.moveTo(imageCanvas.width/2 - 100, 83);
	  imageCanvasContext.lineTo(imageCanvas.width/2 + 100, 83);
	  imageCanvasContext.stroke();
	  imageCanvasContext.fillText("director", imageCanvas.width/2, 125);
	  imageCanvasContext.font = '25px Open Sans';
	  imageCanvasContext.fillStyle = '#E48723';
	  imageCanvasContext.fillText(director, imageCanvas.width/2, 140);
	  // imageCanvasContext.strokeStyle = "#fff";
	  // imageCanvasContext.strokeRect(imageCanvas.width/2 - 150, 25, 300, 180);

	  //console.dir(lineCanvas)

	  imageCanvasContext.globalCompositeOperation = 'destination-in';
	  imageCanvasContext.drawImage(lineCanvas, 0, 0);
	}
}

app.makeBioIntoCanvas = function(element){
	
	var imageCanvas = document.createElement('canvas');
	var imageCanvasID = "imageCanvas" + element.id;
	imageCanvas.setAttribute("id", imageCanvasID);
	var imageCanvasContext = imageCanvas.getContext('2d');

	var lineCanvas = document.createElement('canvas');
	var lineCanvasID = "lineCanvas" + element.id;
	lineCanvas.setAttribute("id", lineCanvasID);
	var lineCanvasContext = lineCanvas.getContext('2d');

	var pointLifetime = 2500;
	var points = [];


	var text = document.getElementById('bioText').innerText;
	var offset = {};
	


	start();
	/**
	 * Attaches event listeners and starts the effect.
	 */
	function start() {
	  element.addEventListener('mousemove', onMouseMove);
	  window.addEventListener('resize', resizeCanvases);
	  element.appendChild(imageCanvas);
	  resizeCanvases();
	  tick();
	  
	}

	/**
	 * Records the user's cursor position.
	 *
	 * @param {!MouseEvent} event
	 */
	function onMouseMove(event) {

	  points.push({
	    time: Date.now(),
	    x: event.clientX,
	    y: event.clientY,
	  });
	  // console.log(points)
	}

	/**
	 * Resizes both canvases to fill the window.
	 */
	function resizeCanvases() {
	  offset = $("#imageCanvas" + element.id).offset();
	  //console.log(offset)
	  imageCanvas.width = lineCanvas.width = element.clientWidth;
	  imageCanvas.height = lineCanvas.height = element.clientHeight;
	}
	
	/**
	 * The main loop, called at ~60hz.
	 */
	function tick() {
	  // Remove old points
	  points = points.filter(function(point) {
	    var age = Date.now() - point.time;
	    return age < pointLifetime;
	  });

	  drawLineCanvas();
	  drawImageCanvas();
	  requestAnimationFrame(tick);
	}

	/**
	 * Draws a line using the recorded cursor positions.
	 *
	 * This line is used to mask the original image.
	 */
	function drawLineCanvas() {
	  var minimumLineWidth = 60;
	  var maximumLineWidth = 150;
	  var lineWidthRange = maximumLineWidth - minimumLineWidth;
	  var maximumSpeed = 50;

	  lineCanvasContext.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
	  lineCanvasContext.lineCap = 'round';
	  lineCanvasContext.shadowBlur = 30;
	  lineCanvasContext.shadowColor = '#000';
	  
	  for (var i = 1; i < points.length; i++) {
	    var point = points[i];
	    var previousPoint = points[i - 1];

	    // Change line width based on speed
	    var distance = getDistanceBetween(point, previousPoint);
	    var speed = Math.max(0, Math.min(maximumSpeed, distance));
	    var percentageLineWidth = (maximumSpeed - speed) / maximumSpeed;
	    lineCanvasContext.lineWidth = minimumLineWidth + percentageLineWidth * lineWidthRange;

	    // Fade points as they age
	    var age = Date.now() - point.time;
	    var opacity = (pointLifetime - age) / pointLifetime;
	    lineCanvasContext.strokeStyle = 'rgba(0, 0, 0, ' + opacity + ')';


    	lineCanvasContext.beginPath();
	    lineCanvasContext.moveTo(previousPoint.x - offset.left, previousPoint.y - offset.top);
	    lineCanvasContext.lineTo(point.x - offset.left, point.y - offset.top);
	    lineCanvasContext.stroke();
	  }
	}

	/**
	 * @param {{x: number, y: number}} a
	 * @param {{x: number, y: number}} b
	 * @return {number} The distance between points a and b
	 */
	function getDistanceBetween(a, b) {
	  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
	}

	/**
	 * Draws the original image, masked by the line drawn in drawLineToCanvas.
	 */
	function drawImageCanvas() {
	  // Emulate background-size: cover
	  var width = imageCanvas.width;
	  var height = imageCanvas.height;

	  
	  imageCanvasContext.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
	  imageCanvasContext.globalCompositeOperation = 'source-over';

	  imageCanvasContext.font = '300 22px Open Sans';
	  imageCanvasContext.textBaseline = 'top';
	  imageCanvasContext.fillStyle = 'black';
	  imageCanvasContext.fillRect(0, 0, width, height);  
	  imageCanvasContext.fillStyle = '#FFF';
	  //imageCanvasContext.fillText("Helloe esdkfjhsdfkj  dsfkjdhf sdfjhs dfkjh sd", 15, 15);

	  function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var cars = text.split("\n");

        for (var ii = 0; ii < cars.length; ii++) {

            var line = "";
            var words = cars[ii].split(" ");

            for (var n = 0; n < words.length; n++) {
                var testLine = line + words[n] + " ";
                var metrics = context.measureText(testLine);
                var testWidth = metrics.width;

                if (testWidth > maxWidth) {
                    context.fillText(line, x, y);
                    line = words[n] + " ";
                    y += lineHeight;
                }
                else {
                    line = testLine;
                }
            }

            context.fillText(line, x, y);
            y += lineHeight;
        }
     }
      wrapText(imageCanvasContext, text, 15, 15, 275, 30);
	 
	  imageCanvasContext.globalCompositeOperation = 'destination-in';
	  imageCanvasContext.drawImage(lineCanvas, 0, 0);
	}
}


app.openVideoModal = function(){

	var boxes = document.querySelectorAll('.box');
	boxes.forEach(function(box){
		var id = box.id;
		box.addEventListener('click', handleClick);
		var close = box.querySelector('.closeModal');
		close.addEventListener('click', function(){handleModalClick(id)})
	 });


	function handleClick(e){

		if(e.target.tagName === "CANVAS"){
			var targetBox = e.target.parentElement;
			var iframe = targetBox.querySelector('iframe');
    		var targetPlayer = new Vimeo.Player(iframe);
			targetBox.classList.add('showModal');

			var iframeArray = document.querySelectorAll('iframe');
			iframeArray.forEach(function(singleIframe){
				var player = new Vimeo.Player(singleIframe);
				player.pause();
			})

			targetPlayer.play();
			document.getElementById('mainFooter').classList.remove('up');
		}
	} 
	function handleModalClick(id){

		var targetBox = document.getElementById(id)
		var iframe = targetBox.querySelector('iframe');
		var player = new Vimeo.Player(iframe);
		player.pause();
		
		targetBox.classList.remove('showModal');
		document.getElementById('mainFooter').classList.add('up');
	}	
}