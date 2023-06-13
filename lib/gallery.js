import { loadResource } from "./photoloader.js";

let gallery;
let next_gallery;
let prev_gallery;
let first_gallery;
let last_gallery;

export async function load(uri){
    let promise = loadResource(uri).then(g => {
        gallery = g.photos;
        next_gallery = g.links.next.href;
        prev_gallery = g.links.prev.href;
        first_gallery = g.links.first.href;
        last_gallery = g.links.last.href;
    });
    await promise;
    return gallery;
}

export function next() {
    return load(next_gallery);
}

export function prev() {
    return load(prev_gallery);
}

export function first() {
    return load(first_gallery);
}

export function last() {
    return load(last_gallery);
}