(function() {
    var currentIndex = 0;
    var prevIndex = 0;

    function updateServices(nextIndex) {
        var services = document.querySelectorAll('.service-container .service-items');

        services[prevIndex].classList.remove('active'); // скрыть
        services[nextIndex].classList.add('active'); // показать
    }

    function updateButtons(nextIndex) {
        var ServiceButton = document.querySelectorAll('.service-button .service-button-item');

        ServiceButton[prevIndex].classList.remove('active'); // скрыть
        ServiceButton[nextIndex].classList.add('active'); // показать
    }


    var serviceButtons = document.querySelectorAll('.service-button-link');

    serviceButtons.forEach((item, index) => {

        item.onclick = function(e) {

            e.stopImmediatePropagation();

            prevIndex = currentIndex;

            currentIndex = index; // update index

            updateServices(currentIndex);
            updateButtons(currentIndex);
        }
    });

})();