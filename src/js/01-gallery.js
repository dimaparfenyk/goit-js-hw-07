import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryImageContainer = document.querySelector('.gallery')

function createListGalleryItems(items) {

  return items.map(item =>
    `<div class="gallery__item">
        <a class="gallery__link" 
        href="${item.original}">
        <img class="gallery__image"
        src="${item.preview}" 
        data-source="${item.original}" 
        alt="${item.description}"/>
        </a>
    </div>`).join("");
}

console.log(createListGalleryItems(galleryItems))
galleryImageContainer.innerHTML = createListGalleryItems(galleryItems);

// galleryImageContainer.addEventListener('click', onGalleryImageContainerClick);

// function onGalleryImageContainerClick(evt) {
//   if (!evt.target.classList.contains('.gallery__image')) {
//     return
//   }
// };
console.log(galleryItems);
// const instance = basicLightbox.create(` <img src="${modalImgToShow}" width="800" height="600">`,
// {        closable: true,
//  onShow: (instance) => { window.addEventListener('keydown', onModalPressEsc) },
//  onClose: (instance) => {window.removeEventListener('keydown', onModalPressEsc)},
//  });




