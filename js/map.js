
     var mapContainer = document.querySelector(".map")
     var mapPopup = document.querySelector(".modal-map");
     var mapClose = mapPopup.querySelector(".modal-close");


     mapContainer.addEventListener ("click", function (evt) {
         evt.preventDefault();
         mapPopup.classList.add("modal-show");
     });

     mapClose.addEventListener ("click",function (evt) {
         evt.preventDefault();
         mapPopup.classList.remove("modal-show");
     });