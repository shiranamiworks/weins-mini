
//$(function(){
//  $(window).on("load resize scroll",function(){
//    var wh = $(this).scrollTop()+$(this).height()/8*7;
//    $(".zoom").each(function(){
//      var t = $(this).offset().top;
//      if(wh >= t){
//        $(this).addClass("on");
//      }
//    });
//  });
//});

//$(function(){
//$('.main-visual .mv01')
//    .animate({'opacity':'1'}, 1600)
//    .animate({'opacity': '0'}, 800);
//    
//$('.main-contents')
//    .animate({'top':'0'}, 2400)
//    .animate({'opacity':'1'}, 2000);
//});

//$(function(){
//  if($("#top").length){
//    $(".change-buttons .button").on("click",function(e){
//      e.preventDefault();
//      var _target = $(this).data("target");
//      $(".change-buttons .button").removeClass("current");
//      $(this).addClass("current");
//      $(".tab-inner").removeClass("current");
//      $(".tab-inner."+_target).addClass("current");
//    });
//  }
//});

$(function(){
	$(window).scroll(function () {
		$('.txt-box div').each(function () {
			boxNum = $(this).attr("class"),
			scrollTop = $(window).scrollTop();
			areaTop = $(this).offset().top;
			if (scrollTop > areaTop) {
				$('.images .' + boxNum).addClass('active');
			} else{
				$('.images .' + boxNum).removeClass('active');
			}
		});
	});
});


$(function() {
  $(".electrics .list").slick({
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        },
      },
    ],
  });
});


$(function(){
  $(window).on("load resize scroll",function(){
    var wh = $(this).scrollTop()+$(this).height()/8*7;
    $(".js-scroll").each(function(){
      var t = $(this).offset().top;
      if(wh >= t){
        $(this).addClass("on");
      }
    });
  });
});

$(function(){
  if($("#top").length){
    $(window).on("scroll resize",function(){
      var _ws = $(this).scrollTop();
      var _wh = $(this).height();
      $(".js-target").each(function(){
        var _ts = $(this).offset().top;
        if(_ts < _ws + _wh / 3 * 2 ){
          $(this).addClass("on");
        }
      });
    }).resize();
  }
});

$(function() {
$('.slider').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10%",
        }
      },
    ]
  });
});

$(function() {
$('.slider02').slick({
    autoplay: true,
    dots: false,
    centerMode: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
    ]
  });
});
$(function() {
$('.slider03').slick({
//    fade: true,
//    speed: 1000,
//    autoplaySpeed: 5000,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
//    dots: true,
  });
});

$(function() {
  $(".fixed-banner .close").on("click",function(){
    $(window).off('scroll');
    $(".fixed-banner").fadeOut();
  });
});


$(function() {
  $(".slider01").slick({
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });
});

$(function() {
    $("[data-id]").on("click", function() {
  
　const id = $(this).data('id');　// data-idのidを取得
　const target = $('[data-target="' + id + '"]');

    scrollToAnchor(target);
    return false
 });
});


