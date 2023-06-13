import { prefixeURI } from "./config.js";

export function display_galerie(galerie){
    const main = document.getElementById('gallery');
    const ex_gallery_container = document.getElementById("gallery_container");

    const gallery_container = document.createElement('div');
    gallery_container.setAttribute("id", "gallery_container");
    gallery_container.classList.add("gallery-container");

    galerie.forEach(element => {
        const div = document.createElement("div");
        const image = document.createElement('img');

        div.classList.add('vignette');

        image.setAttribute('data-photoId', element.photo.id);
        image.setAttribute('src', prefixeURI + element.photo.thumbnail.href);

        div.appendChild(image);
        gallery_container.appendChild(div);
    });
    main.replaceChild(gallery_container, ex_gallery_container);
}