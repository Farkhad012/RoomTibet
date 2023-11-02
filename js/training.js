// Получи элементы с классом "text__content"
let myElements = document.getElementsByClassName("text__content");

for (let i = 0; i < myElements.length; i++) {
    myElements[i].textContent = "Измененный текст";
};

// Изменение текста и контента =============================================================================

// поиск элемента по классу и использование цикла
let firstTitles = document.getElementsByClassName("first__title")

for (let i = 0; i < firstTitles.length; i++) {
    firstTitles[i].textContent = "Заголовок желтого цвета"

}

// поиск элемента по классу и использование цикла
let bigTitles = document.getElementsByClassName("second__title")
for (let i = 0; i < bigTitles.length; i++) {
    bigTitles[i].textContent = "Большой тайтл"
}

// Изменение стилей =============================================================================

// поиск элемента по тегу
let about = document.getElementById("about");
about.style.background = "#a9203e";

// поиск конкретного элемента по классу
let aboutButton = document.querySelector(".about__text .button")
aboutButton.style.border = "1px solid #ffe135"
aboutButton.style.color = "#ffa135"
aboutButton.style.background = "#002387"

// Манипуляция DOM =============================================================================

// По тегу, классу или имени:
// querySelector: Получение первого элемента, соответствующего CSS-селектору.
// let offerFeatures = document.querySelector(".offer__features")
// offerFeatures.style.border = "1px solid #a9203e"
// offerFeatures.style.height = "200px"


// По тегу, классу или имени:
// querySelector: Получение первого элемента, соответствующего CSS-селектору.
let offerFeatures = document.querySelectorAll(".offer__features")

for (let i = 0; i < offerFeatures.length; i++) {
    let feature = offerFeatures[1];
    feature.style.border = "1px solid black"
}


// Шаг 1: Получаем родительский элемент (дом)
let house = document.getElementById("about");

// Шаг 2: Создаем новую комнату (элемент)
let newRoom = document.createElement("div");

// Шаг 3: Настраиваем атрибуты и содержимое комнаты
newRoom.className = "room";
newRoom.textContent = "Новая комната";
newRoom.style.border = "1px solid #002387"

// Шаг 4: Вставляем новую комнату внутрь дома
house.appendChild(newRoom);

// попытка 2
let parentElement = document.querySelector(".popular__img_box");
let newImageBox = document.createElement("div");
newImageBox.className = "popular__img";
newImageBox.style.backgroundImage = "url(/Images/popular_directions2.jpg)";
parentElement.appendChild(newImageBox);


let newParentElement = document.querySelectorAll(".popular__img");

let rateElement = document.createElement("div");
rateElement.className = "popular__img_rate";

let descriptionBox = document.createElement("div");
descriptionBox.className = "popular__img_description-box";

if (newParentElement.length >= 4) {
    let lastParentElement = newParentElement[3];

    lastParentElement.appendChild(rateElement);
    rateElement.textContent = "4.8"

    lastParentElement.appendChild(descriptionBox);

}

// обработчки события

// Получаем все кнопки с классом "applyStyleButton"
const buttons = document.querySelectorAll('.button');

// Назначаем обработчик события на каждую кнопку
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Добавляем класс к текущей кнопке
        this.classList.add('highlighted');
        
        // Можно добавить другие стили или логику для каждой кнопки здесь
    });
});



