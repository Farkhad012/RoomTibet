new AirDatepicker('#airdatepicker', {
    buttons: ['today', 'clear'],
    range: true,
    multipleDatesSeparator: ' - ',
    position: 'right center',
});

// HEADER ===================================================================

let selectContainers = document.querySelectorAll(".custom-select");

selectContainers.forEach(function (selectContainer) {
    let selectSelected = selectContainer.querySelector(".select-selected");
    let selectItems = selectContainer.querySelector(".select-items");
    let arrowInvert = selectSelected.querySelector(".arrow");

    // Открываем / закрываем список при нажатии
    selectSelected.addEventListener("click", function () {
        selectItems.classList.toggle("select-hide");
        arrowInvert.classList.toggle("arrow-invert");
    });

    // Обрабатываем выбор опции
    selectItems.addEventListener("click", function (e) {
        if (e.target.classList.contains("option")) {
            selectSelected.textContent = e.target.textContent;
            selectItems.classList.add("select-hide");
            arrowInvert.classList.remove("arrow-invert");
        }
    });

    // Закрываем список, если клик произведен вне списка
    document.addEventListener("click", function (e) {
        if (!selectContainer.contains(e.target)) {
            selectItems.classList.add("select-hide");
            arrowInvert.classList.remove("arrow-invert");
        }
    });
});

// BURGER-MENU ===============================================================

let burgerMenuIcon = document.querySelector(".burger__menu-icon");
let headerNav = document.querySelector(".header__nav");
let headerNavList = document.querySelector(".header__nav-list");

burgerMenuIcon.addEventListener("click", function (e) {
    headerNav.classList.toggle("open");
    // headerNavList.classList.toggle("opened");

    // e.stopPropagation(); // Остановка всплытия события, чтобы не срабатывал document.click
});

document.addEventListener("click", function (e) {
    if (!burgerMenuIcon.contains(e.target) && !headerNav.contains(e.target)) {
        headerNav.classList.remove("open");
    }
});


// POPULAR ===================================================================

document.addEventListener('DOMContentLoaded', function () {
    const imgElements = document.querySelectorAll('.popular__img');

    imgElements.forEach(function (imgElement) {
        imgElement.addEventListener('click', function () {
            const descriptionBox = imgElement.querySelector('.popular__img_description-box');
            const rateElement = imgElement.querySelector('.popular__img_rate');

            descriptionBox.classList.toggle('description_box-open');
            rateElement.classList.toggle('popular__img_rate-close');
        });
    });
});

