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
