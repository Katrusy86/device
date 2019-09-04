var mapContainer = document.querySelector(".map")
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");
var overflow = document.querySelector(".overflow");


mapContainer.addEventListener ("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
    overflow.classList.add("in");
});

mapClose.addEventListener ("click",function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
    overflow.classList.remove("in");
});

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: {lat: 55.687222, lng: 37.529583},
      disableDefaultUI: true
    });

    var marker = new google.maps.Marker({
        position: {lat: 55.687222, lng: 37.529583},
        map:map,
        title: 'улица Строителей 15',
      });

    var smallmap = new google.maps.Map(document.getElementById('smallmap'), {
    zoom: 15,
    center: {lat: 55.687222, lng: 37.529583},
    disableDefaultUI: true
    });

    var smallmarker = new google.maps.Marker({
        position: {lat: 55.687222, lng: 37.529583},
        map:smallmap,
        title: 'улица Строителей 15',
    });
        
  }

  