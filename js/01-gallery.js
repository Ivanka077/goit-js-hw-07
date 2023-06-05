import { galleryItems } from './gallery-items.js';
// Change code below this line
const ulEl = document.querySelector('.gallery');



function createGalleryElement(items) {
    let galleryLi = document.createElement('li');
    galleryLi.classList.add('gallery__item');
    
    let galleryElements = items.map(item => {
      return `<li class="gallery__item">
                  <a class="gallery__link" href="${item.original}">
                    <img
                      class="gallery__image"
                      src="${item.preview}"
                      data-source="${item.original}"
                      alt="${item.description}"
                    />
                  </a>
                </li>`;
    });

  
  ulEl.innerHTML = galleryElements.join('');

}

function onGalleryItemClick(event) {
    event.preventDefault();
    let clickedItemLi = event.target.closest('.gallery__item');
    if (!clickedItemLi) {
        return;
    }
    
  const instance = basicLightbox.create(`
    <div class="modal"><img src="${event.target.dataset.source}" width="800" height="600">
    </div>
`)

  instance.show();
  
  ulEl.addEventListener('keydown', (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

function bindEvents(ulEl) {
    ulEl.addEventListener('click', onGalleryItemClick)
}

function initGallery(items) {
    let galleryLi = createGalleryElement(items);
   
    bindEvents(ulEl);
   
}

initGallery(galleryItems);


