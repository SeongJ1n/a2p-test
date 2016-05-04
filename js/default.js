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

for(a=0; a<=7; a++){
  var name = coord_data[univ][a].name;
  var count = coord_data[univ][a].count;
  var latitude = coord_data[univ][a].latitude;
  var longitude = coord_data[univ][a].longitude;

  var content = '<div class="arrow-box">'+
                '<h5 class="arrow-box-placename">'+name+'</h5>' +
                '<p class="arrow-box-pcnumber">PC '+count+'대</p>'
                '</div>';

  var position = new daum.maps.LatLng(latitude, longitude);

  var customOverlay = new daum.maps.CustomOverlay({
      position: position,
      content: content,
      xAnchor: 0,
      yAnchor: 0
  });

  customOverlay.setMap(map);
}
