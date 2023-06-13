"use strict";

import { prefixeURI } from "./config.js";

export function display_galerie(galerie){
    // Récupéraiton de l'ancienne galerie et de son parent pour pouvoir la remplacer par la suite
    // Cela permet de bel et bien changer de galerie et non pas de les ajouter les unes à la suite des autres
    const main = document.getElementById('gallery');
    const ex_gallery_container = document.getElementById("gallery_container");

    // Création de la nouvelle galerie avec son identifiant et sa classe
    const gallery_container = document.createElement('div');
    gallery_container.setAttribute("id", "gallery_container");
    gallery_container.classList.add("gallery-container");

    // Pour chaque photo de la galerie on crée une vignette avec la miniature de la photo
    galerie.forEach(element => {
        // Création des éléments
        const div = document.createElement("div");
        const image = document.createElement('img');

        // Ajout des classes des éléments
        div.classList.add('vignette');

        // Ajout des attributs des éléments
        image.setAttribute('data-photoId', element.photo.id);
        image.setAttribute('src', prefixeURI + element.photo.thumbnail.href);

        // AJout des éléments à la galerie
        div.appendChild(image);
        gallery_container.appendChild(div);
    });

    // On remplace l'ancienne galerie par la nouvelle
    main.replaceChild(gallery_container, ex_gallery_container);
}