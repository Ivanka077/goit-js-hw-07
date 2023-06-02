import { galleryItems } from './gallery-items.js';
// Change code below this line
const ulEl = document.querySelector('.gallery');

console.log(galleryItems);

function createGalleryElement(items) {
    let galleryLi = document.createElement('li');
    galleryLi.classList.add('gallery__item');
    
    let galleryElements = items.map(item => {
        let itemLink = document.createElement('a');
        itemLink.classList.add('gallery__link');
        itemLink.href = item.original; 

        let imgEl = document.createElement('img');
        imgEl.classList.add('gallery__image');

        imgEl.dataset.source = item.original;
        imgEl.src = item.preview;
        imgEl.alt = item.description;
        itemLink.appendChild(imgEl);

        return itemLink;
    });

    console.log(galleryElements);
    galleryLi.append(...galleryElements)
    ulEl.append(galleryLi);


    return ulEl;
}


function onGalleryItemClick(event) {
    event.preventDefault();
    let clickedItemLi = event.target.closest('.gallery__item');
    console.log(clickedItemLi);
    if (!clickedItemLi) {
        return;
    }
    
  const instance = basicLightbox.create(`
    <div class="modal"><img src="${event.target.dataset.source}" >
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


