$(document).ready(function(){

    // Back to top
    $(window).scroll(function(){
        var x=$ (document).scrollTop();
        if(x>50){
            $(".scrolltop").fadeIn("slow");
        }
        else{
            $(".scrolltop").fadeOut("slow");
        }
    });
    $(".scrolltop").click(function(){
        $(window).scrollTop(0);
    });
    	// banner
    $('.bann-sld').slick({
      dots: false,
      infinite: true,
      speed:300,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right'></i></button>",
      
  });

});


