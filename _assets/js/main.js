// general js for the project that wouldn't be a reuseable component


/*********** Blur and change colour of hero images  *************/


$(window).on('scroll', function () {

  if($(window).scrollTop() > 200) {
         $(".bv-title-yellow").addClass("text--yellow");
     } else {
         //remove the background property so it comes transparent again (defined in your css)
        $(".bv-title-yellow").removeClass("text--yellow");
     }
  //console.log('hey');
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    var pixs = $(document).scrollTop(),
    pixs = pixs / 60,
    offset = 600,
    //range = 100,
    calc = 0.8 - (pixs )/10;
    //console.log(calc+' '+pixs);

	if(isFirefox === false){
    	$(".bv-banner-out").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)","opacity": calc });
      //$(".bv-title-yellow").addClass("text--yellow");
  }  else { $(".bv-banner-out").css({"opacity": calc });}
});

//console.log('hey');
