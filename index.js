"use strict";

import {loadPicture, loadResource} from "./lib/photoloader.js";
import { displayCategorie, displayCommentaire, displayPicture } from "./lib/ui.js";

// Fonction qui permet d'afficher une image ainsi que sa catégorie et ses commentaires
// Paramètre id correspondant à l'identifiant de l'image
const getPicture = function (id) {
    // Utilisation de la méthode LoadPicture qui renvoie une promesse correspondant aux informations d'une image au formt JSON
    loadPicture(id).then(p => {
        displayPicture(p.photo); // Affichage de l'image
        getCategory(p).then(cat => displayCategorie(cat.categorie)); // Affichage de la catégorie
        getComments(p).then(com => displayCommentaire(com.comments)); // Affichage des commentaires
    });
}

// Fonction permettant de récupérer la catégorie d'une image avec la fonction loadResource du module photoloader
const getCategory = function (picture) {
    return loadResource(picture.links.categorie.href);
}

// Fonction permettant de récupérer les commentaires d'une image avec la fonction loadResource du module photoloader
const getComments = function (picture) {
    return loadResource(picture.links.comments.href);
}

// Affichage de la photo 105
getPicture(105);