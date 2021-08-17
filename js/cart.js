const choise = document.querySelector(".cart__choise");
const selected = document.querySelector(".cart__selected");

const rations1 = document.querySelector(".choise__item-rations1");

rations1.addEventListener('click', () => {
    document.querySelector(".selected__items").insertAdjacentHTML('afterbegin', `<li class="selected__item" id="ration1">
    <button class="selected__del-btn"
        onclick="document.querySelector('#ration1').style.display = 'none' ">
        <img src="image/delete__btn.svg" alt="delete button">
    </button>
    <div class="selected__body">
        <span class="body__title">Офис
            <span class="body__subtitle">900 калл.</span>
        </span>
        <form action="#" class="body__period">
            <label>
                день
                <span class="period__prices">30.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
            <label>
                1 Неделя
                <span class="period__prices">220.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
            <label>
                1 Месяц
                <span class="period__prices">600.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
        </form>
    </div>
</li>`);
    addingProducts();
});

const rations2 = document.querySelector(".choise__item-rations2");

rations2.addEventListener('click', () => {
    document.querySelector(".selected__items").insertAdjacentHTML('afterbegin', `<li class="selected__item" id="ration2">
    <button class="selected__del-btn" onclick="parentElement.remove()">
        <img src="image/delete__btn.svg" alt="delete button">
    </button>
    <div class="selected__body">
        <span class="body__title">Легкий
            <span class="body__subtitle">1100 калл.</span>
        </span>
        <form action="#" class="body__period">
            <label>1
                день
                <span class="period__prices">30.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
            <label>1
                Неделя
                <span class="period__prices">220.00 Byn</span>
                <input onclick="parentElement.classList.toggle('choisen')" type="checkbox">
            </label>
            <label>1
                Месяц
                <span class="period__prices">600.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
        </form>
    </div>
</li>`);
    addingProducts();
});

const rations3 = document.querySelector(".choise__item-rations3");

rations3.addEventListener('click', () => {
    document.querySelector(".selected__items").insertAdjacentHTML('afterbegin', `<li class="selected__item" id="ration3">
    <button class="selected__del-btn" onclick="parentElement.remove()">
        <img src="image/delete__btn.svg" alt="delete button">
    </button>
    <div class="selected__body">
        <span class="body__title">Фитнес
            <span class="body__subtitle">1300 калл.</span>
        </span>
        <form action="#" class="body__period">
            <label>1
                день
                <span class="period__prices">30.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
            <label>1
                Неделя
                <span class="period__prices">220.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
            <label>1
                Месяц
                <span class="period__prices">600.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
        </form>
    </div>
</li>`);
    addingProducts();
});

const rations4 = document.querySelector(".choise__item-rations4");

rations4.addEventListener('click', () => {
    document.querySelector(".selected__items").insertAdjacentHTML('afterbegin', `<li class="selected__item" id="ration4">
    <button class="selected__del-btn" onclick="parentElement.remove()">
        <img src="image/delete__btn.svg" alt="delete button">
    </button>
    <div class="selected__body">
        <span class="body__title">Спорт
            <span class="body__subtitle">1600 калл.</span>
        </span>
        <form action="#" class="body__period">
            <label>1
                день
                <span class="period__prices">30.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
            <label>1
                Неделя
                <span class="period__prices">220.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
            <label>1
                Месяц
                <span class="period__prices">600.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
        </form>
    </div>
</li>`);
    addingProducts();
});

const rations5 = document.querySelector(".choise__item-rations5");

rations5.addEventListener('click', () => {
    document.querySelector(".selected__items").insertAdjacentHTML('afterbegin', `<li class="selected__item" id="ration5">
    <button class="selected__del-btn" onclick="parentElement.remove()">
        <img src="image/delete__btn.svg" alt="delete button">
    </button>
    <div class="selected__body">
        <span class="body__title">Баланс
            <span class="body__subtitle">2000 калл.</span>
        </span>
        <form action="#" class="body__period">
            <label>1
                день
                <span class="period__prices">30.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
            <label>1
                Неделя
                <span class="period__prices">220.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
            <label>1
                Месяц
                <span class="period__prices">600.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
        </form>
    </div>
</li>`);
    addingProducts();
});

const rations6 = document.querySelector(".choise__item-rations6");

rations6.addEventListener('click', () => {
    document.querySelector(".selected__items").insertAdjacentHTML('afterbegin', `<li class="selected__item" id="ration6">
    <button class="selected__del-btn" onclick="parentElement.remove()">
        <img src="image/delete__btn.svg" alt="delete button">
    </button>
    <div class="selected__body">
        <span class="body__title">Сила
            <span class="body__subtitle">2400 калл.</span>
        </span>
        <form action="#" class="body__period">
            <label>1
                день
                <span class="period__prices">30.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
            <label>1
                Неделя
                <span class="period__prices">220.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
            <label>1
                Месяц
                <span class="period__prices">600.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
        </form>
    </div>
</li>`);
    addingProducts();
});

const rations7 = document.querySelector(".choise__item-rations7");

rations7.addEventListener('click', () => {
    document.querySelector(".selected__items").insertAdjacentHTML('afterbegin', `<li class="selected__item" id="ration7">
    <button class="selected__del-btn" onclick="parentElement.remove()">
        <img src="image/delete__btn.svg" alt="delete button">
    </button>
    <div class="selected__body">
        <span class="body__title">Супер
            <span class="body__subtitle">3200 калл.</span>
        </span>
        <form action="#" class="body__period">
            <label>1
                день
                <span class="period__prices">30.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
            <label>1
                Неделя
                <span class="period__prices">220.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
            <label>1
                Месяц
                <span class="period__prices">600.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
        </form>
    </div>
</li>`);
    addingProducts();
});

const rations8 = document.querySelector(".choise__item-rations8");

rations8.addEventListener('click', () => {
    document.querySelector(".selected__items").insertAdjacentHTML('afterbegin', `<li class="selected__item" id="ration8">
    <button class="selected__del-btn" onclick="parentElement.remove()">
        <img src="image/delete__btn.svg" alt="delete button">
    </button>
    <div class="selected__body">
        <span class="body__title">vegan
            <span class="body__subtitle">1300 калл.</span>
        </span>
        <form action="#" class="body__period">
            <label>1
                день
                <span class="period__prices">30.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
            <label>1
                Неделя
                <span class="period__prices">220.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
            <label>1
                Месяц
                <span class="period__prices">600.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
        </form>
    </div>
</li>`);
    addingProducts();
});

const rations9 = document.querySelector(".choise__item-rations9");

rations9.addEventListener('click', () => {
    document.querySelector(".selected__items").insertAdjacentHTML('afterbegin', `<li class="selected__item" id="ration9">
    <button class="selected__del-btn" onclick="parentElement.remove()">
        <img src="image/delete__btn.svg" alt="delete button">
    </button>
    <div class="selected__body">
        <span class="body__title">Vegan+
            <span class="body__subtitle">2000 калл.</span>
        </span>
        <form action="#" class="body__period">
            <label>1
                день
                <span class="period__prices">30.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
            <label>1
                Неделя
                <span class="period__prices">220.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
            <label>1
                Месяц
                <span class="period__prices">600.00 Byn</span>
                <input type="checkbox" onclick="parentElement.classList.toggle('choisen')">
            </label>
        </form>
    </div>
</li>`);
    addingProducts();
});

function closet() {
    setTimeout(`selected.style.display = "none"`, 500);
    setTimeout(`choise.style.display = "flex"`, 500);
    selected.style.opacity = '0';
    selected.style.zIndex = '-1';
    choise.style.opacity = "1";
};

function opens() {
    setTimeout(`selected.style.display = "block"`, 500);
    setTimeout(`choise.style.display = "none"`, 500);
    selected.style.opacity = '1';
    selected.style.zIndex = '2';
    choise.style.opacity = "0";
};

function addingProducts() {
    setTimeout(`selected.style.display = "block"`, 500);
    setTimeout(`choise.style.display = "none"`, 500);
    selected.style.opacity = '1';
    selected.style.zIndex = '2';
    choise.style.opacity = "0";
};