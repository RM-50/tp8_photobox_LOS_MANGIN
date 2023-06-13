import { prefixeURI } from "./config.js";
import { loadResource } from "./photoloader.js";

let gallery;
let next;
let prev;
let first;
let last;

export function load(uri){
    loadResource(prefixeURI + uri).then(g => {
        gallery = g.photos;
        next = g.links.next.href;
        prev = g.links.prev.href;
        first = g.links.first.href;
        last = g.links.last.href;
    });
    return gallery;
}

export function next() {
    load(next);
}

export function prev() {
    load(prev);
}

export function first() {
    load(first);
}

export function last() {
    load(last);
}