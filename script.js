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
};

//? Animation des slider accueil et catégories
// Je stocke mes éléments 1er carrousel, second carrousel, troisième carrousel
const carrousel1 = document.getElementById('carrousel1');
const carrousel2 = document.getElementById('carrousel2');
const carrousel3 = document.getElementById('carrousel3');
const precedent = document.getElementById('chevronG');
const suivant = document.getElementById('chevronD');
// console.log(carrousel1);
// console.log(carrousel2);
// console.log(carrousel3);

// Les actions au clics => addEvntListener sur les icônes prec & suite
precedent.addEventListener('click', slideGauche);
suivant.addEventListener('click', slideDroite);

// Au click, je veux que mon carrousel2 "on" se mette "off", carrousel1 se mette "on"
function slideGauche() {
    // Premier cas de figure, je suis sur le carrousel2
    if(carrousel2.classList.contains('on')) {
        // Disparition carrousel 2
        carrousel2.classList.toggle('on');
        carrousel2.classList.toggle('off');
        // Apparition carrousel 1
        carrousel1.classList.toggle('off');
        carrousel1.classList.toggle('on');
    } else if (carrousel3.classList.contains('on')) {
        // Disparition carrousel 3
        carrousel3.classList.toggle('on');
        carrousel3.classList.toggle('off');
        // Apparition carrousel 2
        carrousel2.classList.toggle('off');
        carrousel2.classList.toggle('on');
    }
}
function slideDroite() {
    // Premier cas de figure, je suis sur le carrousel2
    if(carrousel2.classList.contains('on')) {
        // Disparition carrousel 2
        carrousel2.classList.toggle('on');
        carrousel2.classList.toggle('off');
        // Apparition carrousel 3
        carrousel3.classList.toggle('off');
        carrousel3.classList.toggle('on');
    } else if (carrousel1.classList.contains('on')) {
        // Disparition carrousel 3
        carrousel1.classList.toggle('on');
        carrousel1.classList.toggle('off');
        // Apparition carrousel 2
        carrousel2.classList.toggle('off');
        carrousel2.classList.toggle('on');
    } 
}