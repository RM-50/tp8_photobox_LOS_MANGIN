"use strict";

import { prefixeURI } from "./config.js";

// Fonction permettant d'afficher une photo
export function displayPicture(image){
   
    // Morceau de code rajouté pour l'exercice 4
    // Nous recréons une nouvelle section qui remplacera l'ancienne section
    // Cela permet de remplacer l'image sélectionnée et non pas de l'ajouter à la suite en dessous
    
    /////// A COMMENTER POUR TESTER L'EXERCICE 1 ///////
    const main = document.getElementById('gallery')
    const ex_section = document.getElementById('la_photo');
    const section = document.createElement("section");
    const commentaires = document.createElement("ul");
    commentaires.setAttribute("id", 'les_commentaires');
    const cat = document.createElement("h4");
    cat.setAttribute("id", 'la_categorie');
    ///////////// FIN DU CODE A COMMENTER //////////////

    /////// A DECOMMENTER POUR TESTER L'EXERCICE 1 ///////
    //const section = document.getElementById('la_photo');

    // Création des élément à ajouter
    const img = document.createElement("img");
    const titre = document.createElement("h4");
    const description = document.createElement("p");
    const type = document.createElement("p");

    // Création des valeurs des éléments
    const texttitre = document.createTextNode(image.titre);
    const textdescription = document.createTextNode(image.descr);
    const texttype = document.createTextNode(`${image.type}, ${image.width} x ${image.height}`);

    // Ajout des attributs
    section.setAttribute("id", "la_photo");
    img.setAttribute("src", prefixeURI + image.url.href);

    // Ajout des valeurs aux noeuds parents
    titre.appendChild(texttitre);
    description.appendChild(textdescription);
    type.appendChild(texttype);

    // Ajout de chaque noeud à la section
    section.appendChild(img);
    section.appendChild(titre);
    section.appendChild(description);
    section.appendChild(type);

    ////// A COMMENTER POUR TESTER L'EXERCICE 1 //////
    section.appendChild(cat);
    section.appendChild(commentaires);
    ////////// FIN DU CODE A COMMENTER ///////////////

    // On remplace l'ancienne section par la nouvelle (pour exo 4)
    ///// A COMMENTER POUR TESTER L'EXERCICE 1 ///////
    main.replaceChild(section, ex_section);

}

// Fonction permettant d'afficher le nom de la catégorie de la photo
export function displayCategorie(cat){

    // Récupération des éléments avec leur identifiant
    const section = document.getElementById('la_photo');
    const categorie = document.getElementById('la_categorie');

    // Création des valeurs des éléments
    const textcategorie =document.createTextNode(`categorie : ${cat.nom}`);

    // Ajout des valeurs aux éléments
    categorie.appendChild(textcategorie);

    // Ajout des éléments à la section
    section.appendChild(categorie);
}

// Fonction permettant d'afficher les commentaires d'une image
export function displayCommentaire(com){

    // Création et récupération des éléments avec leur identifiant
    const section = document.getElementById('la_photo');
    const commentaires = document.createElement("h4");
    const ul = document.getElementById('les_commentaires');

    // Création des valeurs des éléments
    const textcommentaires = document.createTextNode("Commentaires : ");

    // Ajout des valeurs des éléments
    commentaires.appendChild(textcommentaires);

    // Ajout des éléments à la section
    section.appendChild(commentaires);

    // Création des différents li correspondant aux différents commentaires
    com.forEach(element => {
        const li = document.createElement("li");
        const textli = document.createTextNode(`${element.pseudo} : ${element.content}`);
        li.appendChild(textli);
        ul.appendChild(li);
    });

    // Ajout de la liste de commentaires à la section
    section.appendChild(ul);
}
