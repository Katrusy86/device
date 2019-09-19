(function() {
    var currentIndex = 0;
    var prevIndex = 0;

    function updateServices(nextIndex) {
        var services = document.querySelectorAll('.service-container .service-items');

        services[prevIndex].classList.remove('active'); // скрыть
        services[nextIndex].classList.add('active'); // показать
    }

    function updateButtons(nextIndex) {
        var serviceButton = document.querySelectorAll('.service-button-item .service-button-link');

        serviceButton[prevIndex].classList.remove('active'); // скрыть
        serviceButton[nextIndex].classList.add('active'); // показать
    }

        var serviceButtons = document.querySelectorAll('.service-button-link');
    
        serviceButtons.forEach(function(item, index) {

        item.onclick = function(e) {

            e.stopImmediatePropagation();

            prevIndex = currentIndex;

            currentIndex = index; // update index

            updateServices(currentIndex);
            updateButtons(currentIndex);
        }
    });

})();