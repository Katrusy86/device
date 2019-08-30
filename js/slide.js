(function() {
    var currentIndex = 0;
    var prevIndex = 0;

    function updateSlide(nextIndex) {
        var slides = document.querySelectorAll('.slide-container .slide-item');

        slides[prevIndex].classList.remove('active'); // скрыть
        slides[nextIndex].classList.add('active'); // показать
    }

    function updatePagination(nextIndex) {
        var bullets = document.querySelectorAll('.slides-pagination .slide-radio');

        bullets[prevIndex].classList.remove('active'); // скрыть
        bullets[nextIndex].classList.add('active'); // показать
    }


    var sliderBullets = document.querySelectorAll('.slide-radio');

    sliderBullets.forEach((item, index) => {

        item.onclick = function() {
            prevIndex = currentIndex;

            currentIndex = index; // update index

            updateSlide(currentIndex);
            updatePagination(currentIndex);
        }
    });

    
})();