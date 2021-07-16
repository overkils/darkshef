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

$slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
});
