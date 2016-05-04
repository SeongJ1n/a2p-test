/* Daum map */


var container = document.getElementById('map');
var options = {
  center: new daum.maps.LatLng(37.498, 127.0276),
  level: 3
};

var map = new daum.maps.Map(container, options);

var content = '<div class="arrow-box">' +
              '<h5 class="arrow-box-placename">문과대도서관</h5>' +
              '<p class="arrow-box-pcnumber">PC 4대</p>'
              '</div>';




var position = new daum.maps.LatLng(37.498, 127.0276);

var customOverlay = new daum.maps.CustomOverlay({
    position: position,
    content: content,
    xAnchor: 0.3,
    yAnchor: 0.91
});

customOverlay.setMap(map);
