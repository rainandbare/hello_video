function makeBioIntoCanvas(element){
	
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

	var text = document.getElementById('bioText').innerText;
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
	    //target: event.target
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
	  var minimumLineWidth = 25;
	  var maximumLineWidth = 100;
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
		    lineCanvasContext.moveTo(previousPoint.x - imageCanvas.offsetLeft, previousPoint.y - imageCanvas.offsetTop);
		    lineCanvasContext.lineTo(point.x - imageCanvas.offsetLeft, point.y - imageCanvas.offsetTop);
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

	  imageCanvasContext.font = '300 25px Open Sans';
	  imageCanvasContext.textBaseline = 'top';
	  imageCanvasContext.fillStyle = 'black';
	  imageCanvasContext.fillRect(0, 0, width, height);  
	  imageCanvasContext.fillStyle = '#FFF';

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
      wrapText(imageCanvasContext, text, 15, 15, 275, 33);
	 
	  imageCanvasContext.globalCompositeOperation = 'destination-in';
	  imageCanvasContext.drawImage(lineCanvas, 0, 0);
	}
}
