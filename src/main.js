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


  searchForm.addEventListener("submit", handleSearch); // Додаємо обробник події

function handleSearch(event) {
  event.preventDefault();

    const queryValue = searchInput.value.trim().toLowerCase();; // Отримуємо значення з поля вводу
//   const searchForm = event.currentTarget;
  
    if (!queryValue) return; // Перевірка на пустий запит
 searchLoader.classList.remove("hidden"); // Показуємо завантажувач
    cleanGallery(); 


searchImagesByQuery(queryValue)
    .then(data => {
        if (data.hits.length === 0) { // Перевіряємо, чи є зображення
            showError('Sorry, there are no images matching your search query. Please try again!')
    } else {
            renderGallery(data.hits); // Відображаємо зображення
        }
    })
    .catch(error => {
            showError(error.message); // Показуємо повідомлення про помилку
    })
    .finally(() => {
            searchLoader.classList.add("hidden"); // Приховуємо завантажувач
            searchInput.value = ""; // Очищуємо поле вводу
        });

}



