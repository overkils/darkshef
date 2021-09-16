const sityFirst = document.querySelector('#sityFirst');
const sitySecond = document.querySelector('#sitySecond');
const modal = document.querySelector('.modal');
const structureHead = document.querySelector('.header');
const structureMain = document.querySelector('main');
const structureFooter = document.querySelector('.footer');

if (docCookies.getItem("sity") == undefined) {
    modalWindow();
}

function modalWindow() {
    structures("none");
    modal.style.display = "block";
    sityFirst.style.backgroundColor = "#7ab826";
}

function modals(nameSity) {
    setTimeout(`modal.style.display = "none"`, 500);
    docCookies.setItem("sity", nameSity.textContent);
    structure();
}

function structure() {
    setTimeout(`structureHead.style.display = "block"`, 500);
    setTimeout(`structureMain.style.display = "block"`, 500);
    setTimeout(`structureFooter.style.display = "block"`, 500);
}

function structures(parametrs) {
    structureHead.style.display = parametrs;
    structureMain.style.display = parametrs;
    structureFooter.style.display = parametrs;
}

function editSity() {
    var blocks = document.querySelector('.header__select-title');
    if (docCookies.getItem("sity") == undefined) {
        blocks.textContent = "Минск";
    } else {
        blocks.textContent = docCookies.getItem("sity");
    }
    console.log(blocks);
}

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
        docCookies.setItem("sity", selectSingle_title.textContent);
    });
};

console.log(docCookies.getItem("sity"));
editSity();

var swiper = new Swiper(".head-slider", {
    pagination: {
        el: ".container__header",
        type: "custom",
        renderCustom: function (swiper, current, total) {
            document.querySelector('.pagingCurrent').innerHTML = "0" + current;
            document.querySelector('.pagingAll').innerHTML = "0" + total;
            const calc = (current / total) * 100;
            document.querySelector('.progress').style.backgroundSize = calc + "%";
        }
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 600,
});

var swiper__calendar = new Swiper(".swiper__calendar", {
    loop: true,
    slidesPerView: 7,
});

const selectSingles = document.querySelector('.menu-header__select');
const selectSingle_titles = selectSingles.querySelector('.menu-header__select-title');
const selectSingle_labelss = selectSingles.querySelectorAll('.menu-header__select-label');

// Toggle menu
selectSingle_titles.addEventListener('click', () => {
    if ('active' === selectSingles.getAttribute('data-state')) {
        selectSingles.setAttribute('data-state', '');
    } else {
        selectSingles.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectSingle_labelss.length; i++) {
    selectSingle_labelss[i].addEventListener('click', (evt) => {
        selectSingle_titles.innerHTML = evt.target.innerHTML;
        selectSingles.setAttribute('data-state', '');
        docCookies.setItem("eat", selectSingle_titles.innerHTML);
    });
};

if (docCookies.getItem("eat") == undefined) {
    selectSingle_titles.innerHTML = "<span class='menu-header__title'>Офис<span class='menu-header__kcal'>900 калл.</span></span>";
} else {
    selectSingle_titles.innerHTML = docCookies.getItem("eat");
}

const calendar = document.querySelector(".calendar__inputs");

console.log(calendar);

let prevalue = calendar.value;

calendar.onclick = function () {
    prevalue = calendar.value;

    document.querySelector(".calendar__btns").style.backgroundColor = "#2E2E2E";
    document.querySelector(".calendar__btns").style.transition = "all 0.5s";
}

calendar.onchange = function () {
    docCookies.setItem("date", calendar.value);
    console.log(docCookies.getItem("date"));
    document.querySelector(".calendar__btns").style.backgroundColor = "#111111";
}

// const texts = document.querySelectorAll(".calendar__btn");

// for (let i = 0; i <= texts.length; i++) {
//     console.log(texts[i].innerText)
// };



const days = new Date();

var options = { weekday: "short", year: 'numeric', month: "long", day: 'numeric' }
console.log(days.toLocaleDateString('ru-RU', options));

const calendarFF = document.querySelector('.calendar__icon-ff')

var usrAg = navigator.userAgent;

if (usrAg.indexOf("Firefox") > -1) {
    calendar.style.display = 'none';
} else {
    calendarFF.style.display = 'none';
}

if (usrAg.indexOf("Safari") > -1) {
    alert("Извиняемся, на данном устройстве не который функционал сайта работать не будет, воспользуйте другим браузером по типу Google Chrome");
}