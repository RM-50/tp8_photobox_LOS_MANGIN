"use strict";

import { loadResource } from "./photoloader.js";

// Création des variables correspondant à :
let gallery; // la liste des photos de la galerie
let next_gallery; // la galerie suivante
let prev_gallery; // la galerie précédente
let first_gallery; // la première galerie
let last_gallery; // la dernière galerie

// Fonction asynchrone permettant de récupérer une galerie donc l'URI est passée en paramètre
export async function load(uri){
    let promise = loadResource(uri).then(g => {
        // Affectation des variables créées précédemment
        gallery = g.photos;
        next_gallery = g.links.next.href;
        prev_gallery = g.links.prev.href;
        first_gallery = g.links.first.href;
        last_gallery = g.links.last.href;
    });
    await promise; // On attend que les valeurs soient affectées
    return gallery // et on renvoie la liste de photos;
}

// Fonction chargeant la galerie suivante
export function next() {
    return load(next_gallery);
}

// Fonction chargeant la galerie précédente
export function prev() {
    return load(prev_gallery);
}

// Fonction chargeant la première galerie
export function first() {
    return load(first_gallery);
}

// Fonction chargeant la dernière galerie
export function last() {
    return load(last_gallery);
}