var app = {};
app.scrollReady = false;
app.deactivateButton = false;
app.ismobile = false;
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
		console.log("clicked");
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
			console.log("full menu clicked");
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
	console.log("SVGs Arrive");
	$("div#phone-div").addClass("arrive");
    $("div#video-div").addClass("arrive");
}

app.contactGo = function(){
	$("svg #cell").on("click", function(){
		console.log("contactGO");
		$("div#phone-div").addClass("flyAway");
    	$("div#video-div").addClass("flyAway");
    	$("header#teaser.shrink").addClass("flyAway");
    	$("section#contactInfo").addClass("contactArrive");
	});
	$("div.closeContact").on("click", function(){
		$("div#phone-div").removeClass("flyAway");
    	$("div#video-div").removeClass("flyAway");
    	$("header#teaser.shrink").removeClass("flyAway");
    	$("section#contactInfo").removeClass("contactArrive");
	});

}

app.reelGo = function(){
	$("svg #cassette").on("click", function(){
		$("div#phone-div").removeClass("arrive");
    	$("div#video-div").removeClass("arrive");
    	$("section#videoPlayer").addClass("playerArrive");
	});
	$("text#We-make-videos-good").on("click", function(){
		$("div#phone-div").removeClass("arrive");
    	$("div#video-div").removeClass("arrive");
    	$("section#videoPlayer").addClass("playerArrive");
	});
	$("div.closePlayer").on("click", function(){
	   	vimeoWrap = $('#vimeoWrap');
	   	vimeoWrap.html( vimeoWrap.html() );
		$("div#phone-div").addClass("arrive");
    	$("div#video-div").addClass("arrive");
    	$("section#videoPlayer").removeClass("playerArrive");

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