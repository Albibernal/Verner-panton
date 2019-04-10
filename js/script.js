
var scrollPosition = 0;
document.addEventListener("wheel", function (e) {
	if (e.deltaY > 0) {
		scrollPosition++;
	} else if (scrollPosition <= 0) {
		scrollPosition = 0;
	} else {
		scrollPosition--;
	}
  	if (scrollPosition > 0) {
	  	// $(".one").css({
	  	// 	'transform': 'scale(' + ( 1 / scrollPosition) + ')'
	  	// }); 
	    
	  	if (scrollPosition < 0) {
	  		$("body").attr("data-slide", "1");
	  	} else if (scrollPosition > 15 && scrollPosition < 30) {
	  		$("body").attr("data-slide", "2");
	  	}

	  	if (scrollPosition < 0) {
	  		$("body").attr("data-slide", "2");
	  	} else if (scrollPosition > 30 && scrollPosition < 45) {
	  		$("body").attr("data-slide", "3");
	  	}
  	}
  	console.log(scrollPosition);
}, true);