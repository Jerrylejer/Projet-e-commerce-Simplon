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

// CARROUSEL PAR LOT DE 4
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

// CARROUSEL RESPONSIVE 
//? Animation des slider accueil et catégories
// Je stocke mes éléments du carrousel
const prec = document.getElementById('chevronGauche');
const suiv = document.getElementById('chevronDroit');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const image6 = document.getElementById('image6');
const image7 = document.getElementById('image7');
const image8 = document.getElementById('image8');
const image9 = document.getElementById('image9');
const image10 = document.getElementById('image10');
const image11 = document.getElementById('image11');
const image12 = document.getElementById('image12');

// Les actions au clics => addEvntListener sur les icônes prec & suite
prec.addEventListener('click', slideG);
suiv.addEventListener('click', slideD);

// Au click, je veux que mon carrousel2 "on" se mette "off", carrousel1 se mette "on"
function slideG() {
    // Premier cas de figure, je suis sur le carrousel2
    if(image12.classList.contains('on')) {
        image12.classList.toggle('on');
        image12.classList.toggle('off');
        image11.classList.toggle('off');
        image11.classList.toggle('on');
    } else if (image11.classList.contains('on')) {
        image11.classList.toggle('on');
        image11.classList.toggle('off');
        image10.classList.toggle('off');
        image10.classList.toggle('on');
    } else if (image10.classList.contains('on')) {
        image10.classList.toggle('on');
        image10.classList.toggle('off');
        image9.classList.toggle('off');
        image9.classList.toggle('on');
    } else if (image9.classList.contains('on')) {
        image9.classList.toggle('on');
        image9.classList.toggle('off');
        image8.classList.toggle('off');
        image8.classList.toggle('on');
    } else if (image8.classList.contains('on')) {
        image8.classList.toggle('on');
        image8.classList.toggle('off');
        image7.classList.toggle('off');
        image7.classList.toggle('on');
    } else if (image7.classList.contains('on')) {
        image7.classList.toggle('on');
        image7.classList.toggle('off');
        image6.classList.toggle('off');
        image6.classList.toggle('on');
    } else if (image6.classList.contains('on')) {
        image6.classList.toggle('on');
        image6.classList.toggle('off');
        image5.classList.toggle('off');
        image5.classList.toggle('on');
    } else if (image5.classList.contains('on')) {
        image5.classList.toggle('on');
        image5.classList.toggle('off');
        image4.classList.toggle('off');
        image4.classList.toggle('on');
    } else if (image4.classList.contains('on')) {
        image4.classList.toggle('on');
        image4.classList.toggle('off');
        image3.classList.toggle('off');
        image3.classList.toggle('on');
    } else if (image3.classList.contains('on')) {
        image3.classList.toggle('on');
        image3.classList.toggle('off');
        image2.classList.toggle('off');
        image2.classList.toggle('on');
    } else if (image2.classList.contains('on')) {
        image2.classList.toggle('on');
        image2.classList.toggle('off');
        image1.classList.toggle('off');
        image1.classList.toggle('on');
    }
}

function slideD() {
    if(image1.classList.contains('on')) {
        image1.classList.toggle('on');
        image1.classList.toggle('off');
        image2.classList.toggle('off');
        image2.classList.toggle('on');
    } else if (image2.classList.contains('on')) {
        image2.classList.toggle('on');
        image2.classList.toggle('off');
        image3.classList.toggle('off');
        image3.classList.toggle('on');
    } else if (image3.classList.contains('on')) {
        image3.classList.toggle('on');
        image3.classList.toggle('off');
        image4.classList.toggle('off');
        image4.classList.toggle('on');
    } else if (image4.classList.contains('on')) {
        image4.classList.toggle('on');
        image4.classList.toggle('off');
        image5.classList.toggle('off');
        image5.classList.toggle('on');
    } else if (image5.classList.contains('on')) {
        image5.classList.toggle('on');
        image5.classList.toggle('off');
        image6.classList.toggle('off');
        image6.classList.toggle('on');
    } else if (image6.classList.contains('on')) {
        image6.classList.toggle('on');
        image6.classList.toggle('off');
        image7.classList.toggle('off');
        image7.classList.toggle('on');
    } else if (image7.classList.contains('on')) {
        image7.classList.toggle('on');
        image7.classList.toggle('off');
        image8.classList.toggle('off');
        image8.classList.toggle('on');
    } else if (image8.classList.contains('on')) {
        image8.classList.toggle('on');
        image8.classList.toggle('off');
        image9.classList.toggle('off');
        image9.classList.toggle('on');
    } else if (image9.classList.contains('on')) {
        image9.classList.toggle('on');
        image9.classList.toggle('off');
        image10.classList.toggle('off');
        image10.classList.toggle('on');
    } else if (image10.classList.contains('on')) {
        image10.classList.toggle('on');
        image10.classList.toggle('off');
        image11.classList.toggle('off');
        image11.classList.toggle('on');
    } else if (image11.classList.contains('on')) {
        image11.classList.toggle('on');
        image11.classList.toggle('off');
        image12.classList.toggle('off');
        image12.classList.toggle('on');
    }
}