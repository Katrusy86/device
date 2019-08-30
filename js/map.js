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
    var map1 = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: { lat: -33, lng: 151 },
      disableDefaultUI: true
    });
}