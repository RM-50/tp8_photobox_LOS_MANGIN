"use strict";

import { load, prev, next, first, last } from "./lib/gallery.js";
import { display_galerie } from "./lib/gallery_ui.js";
import {loadPicture, loadResource} from "./lib/photoloader.js";
import { displayCategorie, displayCommentaire, displayPicture } from "./lib/ui.js";

let isLoaded = false; // Ajout d'un booléen pour savoir si la première page a déjà été chargée

// Fonction de callback des boutons
// cette fonction est asynchrone car il faut pouvoir utiliser await pour attendre que la galerie soit chargée
// Avant de l'afficher
async function btnCallBack(fct, uri="") {
    if (isLoaded){ // Si la galerie 1 a déjà été chargée alors on peut utiliser les boutons 
        const galerie = fct(uri); // Utilisation de la fonction passée en paramètre selon le bouton qui a été pressé
        await galerie; // On attend que la galerie de photos soit initialisée via un fetch dans la méthode load;
        galerie.then(e => { // Ensuite on affiche cette galerie et on ajoute un controlleur sur chaque vignette
            display_galerie(e);
            const images = document.querySelectorAll(".vignette");
            images.forEach(element => {
                // Lorsque l'on clique sur une vignette on affiche son image complète en dessous de la galerie (sous la forme de l'exercice 1 du td)
                element.addEventListener('click', () => getPicture(element.firstChild.getAttribute("data-photoId")));
            });
        });
    }
}

/////// Récupération des fonctions de l'exercice 1 ///////
const getPicture = function (id) {
    loadPicture(id).then(p => {
        displayPicture(p.photo);
        getCategory(p).then(cat => displayCategorie(cat.categorie));
        getComments(p).then(com => displayCommentaire(com.comments));
    });
}

const getCategory = function (picture) {
    return loadResource(picture.links.categorie.href);
}

const getComments = function (picture) {
    return loadResource(picture.links.comments.href);
}

////////////////////////////////////////////////////////////

// Fonction main qui est exécutée une fois que le DOM est entièrement chargé
function main(){

    // On ajoute un listener sur chaque bouton avec comme fonction de callback btnCallBack
    const btnload = document.getElementById('load_gallery');
    btnload.addEventListener('click', () => {
        isLoaded = true;// On indique que la première galerie a été chargée et que l'on peut donc utiliser les 4 autres boutons
        btnCallBack(load, "/www/canals5/phox/api/photos");
    });

    const btnprev = document.getElementById('previous_page');
    btnprev.addEventListener("click", async () => btnCallBack(prev));
    
    const btnnext = document.getElementById('next_page');
    btnnext.addEventListener("click", async () => btnCallBack(next));

    const btnfirst = document.getElementById('first_page');
    btnfirst.addEventListener("click", async () => btnCallBack(first));

    const btnlast = document.getElementById('last_page');
    btnlast.addEventListener("click", async () => btnCallBack(last));

}

// Ajout d'un listener sur la fenetre pour attendre que le dom soit chargé
window.addEventListener('DOMContentLoaded',main);