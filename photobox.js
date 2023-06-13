import { load, prev, next, first, last } from "./lib/gallery.js";
import { display_galerie } from "./lib/gallery_ui.js";
import {loadPicture, loadResource} from "./lib/photoloader.js";
import { displayCategorie, displayCommentaire, displayPicture } from "./lib/ui.js";

async function btnCallBack(fct, uri="") {
    let galerie;
    if (fct === load) {
        galerie = fct(uri);
    }
    else {
        galerie = fct();
    }
    await galerie;
    galerie.then(e => {
        display_galerie(e);
        console.log("eeeeeeeeeeeeeeee")
        const images = document.querySelectorAll("vignette");
        console.log(images)
        images.forEach(element => {
            console.log(element)
            element.addEventListener('click', () => getPicture(element.firstChild.getAttribute("data-photoId")));
        });
    });
}

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


function main(){

    const btnload = document.getElementById('load_gallery');
    btnload.addEventListener('click', () => btnCallBack(load, "/www/canals5/phox/api/photos"));

    const btnprev = document.getElementById('previous_page');
    btnprev.addEventListener("click", async () => btnCallBack(prev));
    
    const btnnext = document.getElementById('next_page');
    btnnext.addEventListener("click", async () => btnCallBack(next));

    const btnfirst = document.getElementById('first_page');
    btnfirst.addEventListener("click", async () => btnCallBack(first));

    const btnlast = document.getElementById('last_page');
    btnlast.addEventListener("click", async () => btnCallBack(last));

}

window.addEventListener('DOMContentLoaded',main);