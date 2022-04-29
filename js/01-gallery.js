import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryImageContainer = document.querySelector('.gallery');

function createListGalleryItems(items) {

    return items.map(item => 
        `<div class="gallery__item">
        <a class="gallery__link"
        data-lightbox="images" 
        href="${item.original}">
        <img class="gallery__image"
        src="${item.preview}" 
        data-source="${item.original}" 
        alt="${item.description}"/>
        </a>
    </div>`).join("")
}
galleryImageContainer.innerHTML = createListGalleryItems(galleryItems);

galleryImageContainer.onclick = (evt) => {
  
  evt.preventDefault();

   if (!evt.target.classList.contains('gallery__image')) {
    return
  }
  
	basicLightbox.create(`
		<img width="1400" height="900" src="${evt.target.dataset.source}">
	`).show()
}





