import { prefixeURI } from "./config.js";

export function displayPicture(image){
   
    const section = document.getElementById('la_photo');
    const img = document.createElement("img");
    const titre = document.createElement("h4");
    const description = document.createElement("p");
    const type = document.createElement("p");

    const texttitre = document.createTextNode(image.titre);
    const textdescription = document.createTextNode(image.descr);
    const texttype = document.createTextNode(`${image.type}, ${image.width} x ${image.height}`);


    img.setAttribute("src", prefixeURI + image.url.href);

    titre.appendChild(texttitre);
    description.appendChild(textdescription);
    type.appendChild(texttype);

    section.appendChild(img);
    section.appendChild(titre);
    section.appendChild(description);
    section.appendChild(type);

}

export function displayCategorie(cat){
    const section = document.getElementById('la_photo');
    const categorie = document.getElementById('la_categorie');

    const textcategorie =document.createTextNode(`categorie : ${cat.nom}`);

    categorie.appendChild(textcategorie);

    section.appendChild(categorie);
}

export function displayCommentaire(com){
    const section = document.getElementById('la_photo');
    const commentaires = document.createElement("h4");
    const ul = document.getElementById('les_commentaires');

    const textcommentaires = document.createTextNode("Commentaires : ");

    commentaires.appendChild(textcommentaires);
    section.appendChild(commentaires);

    com.forEach(element => {
        const li = document.createElement("li");
        const textli = document.createTextNode(`${element.pseudo} : ${element.content}`);
        li.appendChild(textli);
        ul.appendChild(li);
    });

    section.appendChild(ul);

}
