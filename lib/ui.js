function displayPicture(image){
   
    const section = document.getElementById('la_photo');
    const img = document.createElement("img");
    const titre = document.createElement("h4");
    const description = document.createElement("p");
    const type = document.createElement("p");

    const texttitre = document.createTextNode(image.titre);
    const textdescription = document.createTextNode(image.description);
    const texttype = document.createTextNode(`${image.type}, ${image.width} x ${image.heigth}`);


    img.setAttribute("src", image.url.href);

    titre.appendChild(texttitre);
    description.appendChild(textdescription);
    type.appendChild(texttype);

    section.appendChild(img);
    section.appendChild(titre);
    section.appendChild(description);
    section.appendChild(type);


}