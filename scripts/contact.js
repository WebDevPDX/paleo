function initMap() {
  var uluru = {lat: 52.3760254, lng: 4.8963869};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru,
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

initMap();
