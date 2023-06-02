import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const ulEl = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => {
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`;
    return markup;
})

ulEl.insertAdjacentElement('beforeend', markup.join(''));

// function createGalleryElement(items) {
//     let galleryLi = document.createElement('li');
//     galleryLi.classList.add('gallery__item');
    
//     let galleryElements = items.map(item => {
//         let itemLink = document.createElement('a');
//         itemLink.classList.add('gallery__link');
//         itemLink.href = item.original; 

//         let imgEl = document.createElement('img');
//         imgEl.classList.add('gallery__image');

//         
//         imgEl.src = item.preview;
//         imgEl.alt = item.description;
//         itemLink.appendChild(imgEl);

//         return itemLink;
//     });

//     console.log(galleryElements);
//     galleryLi.append(...galleryElements)
//     ulEl.append(galleryLi);


//     return ulEl;
// }



{/* <li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="small-image.jpg" alt="Image description" />
   </a>
</li> */}
