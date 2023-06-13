import {loadPicture, loadResource} from "./lib/photoloader.js";
import { prefixeURI } from "./lib/config.js";

const getPicture = function (id) {
    loadPicture(id).then(p => {
        console.log(p.photo.titre);
        console.log(p.photo.type);
        console.log(p.photo.url.href);
        getCategory(p).then(cat => console.log(cat));
        getComments(p).then(com => console.log(com));
    });
}

const getCategory = function (picture) {
    return loadResource(picture.links.categorie.href);
}

const getComments = function (picture) {
    return loadResource(picture.links.comments.href);
}

getPicture(105);

