// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

 // Ініціалізація SimpleLightbox
const lightbox = new SimpleLightbox('.gallery-item a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

export function showError(error) {
    iziToast.error({
        position: "topRight",
        message: error,
    });
}


// 
    export function renderGallery(hits)   { 
  
    const images = hits.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>`
    <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image"
                src="${webformatURL}"
                alt="${tags}" 
            />
        </a>
        <div class="gallery-content">
            <p class="text-title">Likes<span  class="text">${likes}</span></p>
            <p class="text-title">Views<span  class="text">${views}</span></p>
            <p class="text-title">Comments<span  class="text">${comments}</span></p>
            <p class="text-title">Downloads<span class="text">${downloads}</span></p>
        </div>
    </li>`).join('');

      document.querySelector('.gallery-list').insertAdjacentHTML("beforeend", images);
    lightbox.refresh(); // Оновлення Lightbox

}

export function cleanGallery() {
    const list = document.querySelector(".gallery-list");
    list.innerHTML = "";
}
