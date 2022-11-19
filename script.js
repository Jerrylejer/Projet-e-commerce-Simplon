'use strict';

//? Animation de la navigation au clic

const navigation = document.getElementById('nav');
const burger = document.getElementById('burger');
const burgerBarre1 = document.getElementById('barre_1');
const burgerBarre2 = document.getElementById('barre_2');
const burgerBarre3 = document.getElementById('barre_3');
console.log(navigation);
console.log(burger);

burger.addEventListener('click', navigationHide);
function navigationHide() {
    // class "open" qui toggle avev class "close" qui est fixée sur bav__desktop
    navigation.classList.toggle('open');
    navigation.classList.toggle('close');
    // Animation Burger => croix
    burgerBarre1.classList.toggle('rotate1');
    burgerBarre2.classList.toggle('opacity');
    burgerBarre3.classList.toggle('rotate2');
}
