const selectSingle = document.querySelector('.header__select');
const selectSingle_title = selectSingle.querySelector('.header__select-title');
const selectSingle_labels = selectSingle.querySelectorAll('.header__select-label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
    });
}

const $slider = $('.head__slider');
const $progressBar = $('.progress');

var $status = $('.pagingCurrent');
var $pagingAll = $('.pagingAll');
var $slickElement = $slider;

function setProgress(index) {
    const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;
    $progressBar
        .css('background-size', `${calc}% 100%`)
        .attr('aria-valuenow', calc);
}

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    // $status.text(i + '/' + slick.slideCount);
    $status.text('0' + i);
    $pagingAll.text('0' + slick.slideCount);
});

$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    setProgress(nextSlide);
});

$slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slickPrev'),
    nextArrow: $('.slickNext'),
});

setProgress(0);
