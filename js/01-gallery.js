import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('afterbegin', galleryItems.map(galleryItem => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
            <img
            class="gallery__image"
            src="${galleryItem.preview}"
            data-source="${galleryItem.original}"
            alt="${galleryItem.description}"
            />
        </a>
    </div>
    `
}).join('')); 


galleryEl.addEventListener('click', onImgClick);


function onImgClick(e) {    
    e.preventDefault();
    if (!e.target.dataset.source) {
        return
    }
    const lightBox = basicLightbox.create(`
		<img  src="${e.target.dataset.source}">
	`);
    lightBox.show();
    
    this.addEventListener("keydown", onPresEscape);
    function onPresEscape(e) {
        if (e.key !== "Escape") {
            return
        }
        lightBox.close();
        this.removeEventListener("keydown", onPresEscape);
    }
}



