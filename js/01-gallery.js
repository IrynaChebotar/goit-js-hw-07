import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryItemsMarkup =
    galleryItems.map(({preview, original, description}) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    }).join('');

galleryEl.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

function openImg(event){
    event.preventDefault();

    if (event.target.nodeName !== "IMG"){
        return;
    }
        const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`)

instance.show()
    
}

galleryEl.addEventListener("click", openImg);


