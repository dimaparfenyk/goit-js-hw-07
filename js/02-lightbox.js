import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector(".gallery");

const createGalleryItemMarkup = items => items
  .map(({preview,original,description}) => `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join("");

const galleryMarkup = createGalleryItemMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionSpeed: 250
});

console.log(lightbox);

