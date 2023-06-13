import {api} from "./config.js";

export function loadPicture(idPicture){
    const picture = fetch(
       `${api}/photos/${idPicture}`, 
        { credentials: 'include'}
        )
        .then(p => p.json() // Récupération de la réponse au formate Json
            .then(p => p.photo)) // Récupération de l'objet photo
            .catch(erreur => console.log(erreur))
        .catch(erreur => console.log(erreur));
    return picture;
}
