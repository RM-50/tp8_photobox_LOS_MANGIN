import { prefixeURI } from "./config";
import { loadResource } from "./photoloader";

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