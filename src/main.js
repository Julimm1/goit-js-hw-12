// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import searchImagesByQuery from './js/pixabay-api.js';
import { showError, renderGallery,  cleanGallery } from './js/render-functions.js';



const searchForm = document.querySelector("#searchForm");
const gallery = document.querySelector(".gallery-list")
const searchInput = document.querySelector("#searchInput");
const searchLoader = document.querySelector(".loading");
const loadMoreBtn = document.querySelector(".btn");

const resultsPerPage = 15;
let currentQuery = '';
let currentPage = 1;

  searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    currentQuery = searchInput.value.trim();
    currentPage = 1;
    cleanGallery(); 
      loadMoreBtn.classList.add('hidden');

    await fetchImages();
}); 

loadMoreBtn.addEventListener('click', async () => {
    await fetchImages();
});




    
async function fetchImages() {
   
    const queryValue = searchInput.value.trim().toLowerCase();; 
    if (!queryValue) return; 
    searchLoader.classList.remove("hidden"); 

    try {
        const data = await searchImagesByQuery(currentQuery, currentPage, resultsPerPage)
        if (data.hits.length === 0) { 
            showError('Sorry, there are no images matching your search query. Please try again!')
        } else {
            renderGallery(data.hits);
            if (currentPage > 1) {
                scrollPage()
            }
            if (data.hits.length < resultsPerPage || data.totalHits <= currentPage * resultsPerPage) { 
                loadMoreBtn.classList.add('hidden'); 
                iziToast.info({
                    position: "topRight",
                    message: "We're sorry, but you've reached the end of search results."
                });
            } else {
                loadMoreBtn.classList.remove('hidden');
            }
        }
    } catch (error) {
        showError(error.message);
    } finally {
        searchLoader.classList.add("hidden"); 
    }
}

function scrollPage() {

    const { height: cardHeight } = gallery.getBoundingClientRect();
                window.scrollBy({
                    top: cardHeight * 2, 
                    behavior: 'smooth'
                });
    
}
