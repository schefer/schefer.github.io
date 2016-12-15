// API Key: AIzaSyC9xo7Bq4vAjsaRrk00YSjzTUrJKZJucMk

google.maps.visualRefresh = true;
function initialize() {
  var myLatlng = new google.maps.LatLng(56.8360658,60.5559682);
  var mapOptions = {
    zoom: 17,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('gmap'), mapOptions);
  var contentString = '<div>SCHEFER SPORTSWEAR</div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'SCHEFER SPORTSWEAR'
  });
  infowindow.open(map,marker);
}
google.maps.event.addDomListener(window, 'load', initialize);
