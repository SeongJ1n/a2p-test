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

var $sliderContainer = $('#sliderContainer');
var $dotsContainer = $('#dotsContainer');
var $arrowNext = $('#arrowNext');
var $arrowPrev = $('#arrowPrev');

$arrowPrev.click(function(){
  if( dots > 1 ){
    left = left + 100;
    dots = dots - 1;

    $sliderContainer.css({'left': left + '%'});
    $dotsContainer.find('.dots').removeClass('active').end()
      .find('.dots[data-dots=' + dots + ']').addClass('active');
  };
});

$arrowNext.click(function(){
  if( dots < 5 ){
    left = left - 100;
    dots = dots + 1;

    $sliderContainer.css({'left': left + '%'});
    $dotsContainer.find('.dots').removeClass('active').end()
      .find('.dots[data-dots=' + dots + ']').addClass('active');
  };
});

var $hamburgerMenu = $('#hamburgerMenu');
var $hamburgerContent = $('#hamburgerContent');

$hamburgerMenu.click(function(){
  $hamburgerContent.toggle();
});











