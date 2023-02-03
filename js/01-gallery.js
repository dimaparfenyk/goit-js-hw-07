import { galleryItems } from './gallery-items.js';

// const galleryImageContainer = document.querySelector('.gallery');

// function createListGalleryItems(items) {

//     return items.map(item =>
//         `<div class="gallery__item">
//         <a class="gallery__link"
//         data-lightbox="images"
//         href="${item.original}">
//         <img class="gallery__image"
//         src="${item.preview}"
//         data-source="${item.original}"
//         alt="${item.description}"/>
//         </a>
//     </div>`).join("")
// }
// galleryImageContainer.innerHTML = createListGalleryItems(galleryItems);

// galleryImageContainer.onclick = (evt) => {
  
//   evt.preventDefault();

//    if (!evt.target.classList.contains('gallery__image')) {
//     return
//   }
  
// 	basicLightbox.create(`
// 		<img width="1400" height="900" src="${evt.target.dataset.source}">
// 	`).show()
// }

const galleryList = document.querySelector(".gallery");

const createGalleryMarkup = items => items
  .map(({preview,original,description}) => `
  <div class="gallery__item">
  <a class="gallery__link" data-lightbox="images" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`).join("");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

const onSliderHandler = (e) => {
  e.preventDefault();

  const src = e.target.dataset.source;
  
  if (!src) {
    return;
  };

  const slider = basicLightbox.create(`
    <img src="${src}" width="1400" height="900">`);
    
  slider.show();
  closeSliderByEsc(slider);
};

const closeSliderByEsc = slider => {
  window.document.addEventListener('keydown', e => {
    if (basicLightbox.visible() && e.code === "Escape") {
      slider.close()
    }}
  );
};

galleryList.addEventListener('click', onSliderHandler);


