import {loadPicture, loadResource} from "./lib/photoloader.js";
import { prefixeURI } from "./lib/config.js";
import { displayCategorie, displayCommentaire, displayPicture } from "./lib/ui.js";

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

getPicture(105);

