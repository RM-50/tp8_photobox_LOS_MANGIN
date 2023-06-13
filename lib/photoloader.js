"use strict";

import {api, prefixeURI} from "./config.js";

// Fonction permettant de récupérer les informations d'une image au format JSON
// On renvoie la promesse
export function loadPicture(idPicture){
    const picture = fetch(
       `${api}/photos/${idPicture}`, 
        { credentials: 'include'}
        )
        .then(p => p.json())// Récupération de la réponse au format Json

            // Exercice 1 Etape 1 : j'ai commenté cette partie pour pouvoir faire l'Etape 3 e) en accédant à la partie links et non pas uniquement à la photo
            /*.then(p => p.photo)) // Récupération de l'objet photo
            .catch(erreur => console.log(erreur))*/

        .catch(erreur => console.log(erreur));
    return picture;
}

// Fonction permettant de charger une ressource à partir de son URI
// Résultat au foramt JSON
// On renvoie la promesse
export function loadResource(uri) {
    const resource = fetch(
        prefixeURI + uri,
        {credentials : 'include'}
    )
    .then(r => r.json())
    .catch(erreur => console.log(erreur));
    return resource;
}
