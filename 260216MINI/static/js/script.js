
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

$(function(){
  const boxWrapper = document.querySelector('.animated-box-wrapper');
  const boxTop = boxWrapper.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (boxTop < windowHeight - 100) { // スクロールで要素が見えたら発火
    boxWrapper.classList.add('c-anim-up');
  }
});

$(function(){
$('.main-visual .line03')
    .animate({'opacity':'1'}, 600)
    .animate({'height':'58%'}, 700);
        
$('.main-visual .line04')
    .animate({'opacity':'1'}, 600)
    .animate({'width':'62%'}, 700);
        
$('.main-visual .line05')
    .animate({'opacity':'1'}, 600)
    .animate({'width':'10%'}, 700);
        
$('.main-visual .mv01')
    .animate({'opacity':'1'}, 800)
    .animate({'left':'3%'}, 600)
    
});

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
$('.fair .slider').slick({
    autoplay: true,
    dots: false,
    arrows: false,
    slidesToShow: 1,
  });
});
$(function() {
$('.debut .slider').slick({
    autoplay: true,
    dots: false,
    arrows: false,
    slidesToShow: 1,
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
$('.sec03 .slider').slick({
    autoplay: true,
    dots: true,
    arrows: false,
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
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    slidesToShow: 6,
    swipe: false,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
});

$(function () {
  const showPoint = 100;
  let isClosed = false;

  $(window).on('scroll', function () {
    if (isClosed) return;

    if ($(this).scrollTop() > showPoint) {
      $('.fixed-banner').fadeIn();
    }
  });

  $('.fixed-banner .close').on('click', function () {
    isClosed = true;
    $(window).off('scroll');
    $('.fixed-banner').fadeOut();
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


