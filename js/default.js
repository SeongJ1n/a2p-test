/* section-intro 높이 조절 */

$(document).ready(function () {
  var winWidth = $(window).width();
  var winHeight = $(window).height();
  var $sectionIntro = $('#sectionIntro');
  var $header = $('#header');
  var $introStat = $('#introStat');
  $sectionIntro.height(winHeight+100);

  if(winWidth >= 768){
  $header.css(
    'margin-top', winHeight/2-60);
  $introStat.css(
    'top', winHeight);
  }
  else {
    $sectionIntro.height(300);
    $header.css(
      'margin-top', 90);
  }
});

$(window).on('resize', function(){
  var winWidth = $(window).width();
  var winHeight = $(window).height();
  var $sectionIntro = $('#sectionIntro');
  var $header = $('#header');
  var $introStat = $('#introStat');
  $sectionIntro.height(winHeight+100);

  if(winWidth >= 768){
  $header.css(
    'margin-top', winHeight/2-60);
  $introStat.css(
    'top', winHeight);
  }
  else {
    $sectionIntro.height(300);
    $header.css(
      'margin-top', 90);
  }
});

/* nav 스크롤 */

$(window).scroll(function() {
  var winWidth = $(window).width();
  var winHeight = $(window).height();
  var $nav = $('#nav');
    if(winWidth >= 768){
      if ($nav.offset().top > winHeight+50) {
          $nav.addClass("scroll-nav");
      }
      else {
          $nav.removeClass("scroll-nav");
      }
    }
});


/* 대학 코드, 위도 경도 셋팅 */

var univ = '007030';

var latitude = coord_data[univ][0].latitude;
var longitude = coord_data[univ][0].longitude;

/* Daum map 생성 */
var container = document.getElementById('map');
var options = {
  center: new daum.maps.LatLng(latitude, longitude),
  level: 3
};

var map = new daum.maps.Map(container, options);


/* 마커 생성 */

// 1) 반복을 돔
// 2) 각종 데이터를 조정
// 3) 다음 맵 포지션 생성
// 4) 커스텀 오버레이
// 5) 커스텀 오버레이 지도 덧붙임

// var template = '<div class="{% class %}"><img src="http://naver.com/{% imgDetail %}"></div>';
for(a=0; a<=7; a++){
  var name = coord_data[univ][a].name;
  var count = coord_data[univ][a].count;
  var latitude = coord_data[univ][a].latitude;
  var longitude = coord_data[univ][a].longitude;

  var content = '<div class="arrow-box">' +
  '<h5 class="arrow-box-placename">' + name + '</h5>' +
  '<p class="arrow-box-pcnumber">PC ' + count + '대</p>'
  '</div>';

  // template.replace('{% class %}', name)
  //         .replace('{% imgDetail %}', imgDetail);

  var position = new daum.maps.LatLng(latitude, longitude);

  var customOverlay = new daum.maps.CustomOverlay({
    position: position,
    content: content,
    xAnchor: 0,
    yAnchor: 0
  });

  customOverlay.setMap(map);
};

/**
 * left : somehitn
 * dots : dots임
 */

var left = 0;
var dots = 1;

var $slideContainer = $('#slideContainer');
var $dotsContainer = $('#dotsContainer');
var $arrowNext = $('#arrowNext');
var $arrowPrev = $('#arrowPrev');

$arrowPrev.click(function(){
  if( dots > 1 ){
    left = left + 100;
    dots = dots - 1;
    $slideContainer.animate({
      left: left + "%"
    }, 500 );
    $dotsContainer.find('.dots').removeClass('active').end()
      .find('.dots[data-dots=' + dots + ']').addClass('active');
  };
});

$arrowNext.click(function(){
  if( dots < 5 ){
    left = left - 100;
    dots = dots + 1;
    $slideContainer.animate({
      left: left + "%"
    }, 500 );
    $dotsContainer.find('.dots').removeClass('active').end()
      .find('.dots[data-dots=' + dots + ']').addClass('active');
  };
});

var $hamburgerMenu = $('#hamburgerMenu');
var $hamburgerContent = $('#hamburgerContent');

$hamburgerMenu.click(function(){
  $hamburgerContent.toggle();
  // $hamburgerContent.toggle(
  //   function(){
  //   $hamburgerContent.animate({
  //     height: "300px"
  //   }, 100);
  // },
  //   function(){
  //   $hamburgerContent.animate({
  //     height: "0px"
  //   }, 100);
  //   });
});









