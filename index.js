import {loadPicture} from "./lib/photoloader.js";


const getPicture = function (id) {
    loadPicture(id).then(p => {
        console.log(p.titre);
        console.log(p.type);
        console.log(p.url.href);
    });
}

getPicture(105);

