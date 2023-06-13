import { prefixeURI } from "./config.js";

export function display_galerie(galerie){
    const main = document.getElementById('gallery');
    const gallery_container = document.getElementById('gallery_container');

    galerie.forEach(element => {
        const div = document.createElement("div");
        const image = document.createElement('img');

        div.classList.add('vignette');

        image.setAttribute('data-photoId', element.photo.id);
        image.setAttribute('src', prefixeURI + element.photo.thumbnail.href);

        div.appendChild(image);
        gallery_container.appendChild(div);
    });
    main.appendChild(gallery_container); 
}