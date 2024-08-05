import axios from 'axios';
    const URL = "https://pixabay.com/api/";
const API_KEY = "45237784-d0fd30a4ec7a7095f46d82183";
const PER_PAGE = 15;
    let currentPage = 1;
let currentQuery = '';


export default async function searchImagesByQuery(query) {
   if (query !== currentQuery) {
        currentQuery = query;
        currentPage = 1;
    }

    try {
        const response = await axios.get(URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                per_page: PER_PAGE,
                page: currentPage
            }
        });
            currentPage += 1;
                return response.data;
    }    catch (error) {
        throw new Error(error.response ? error.response.status : error.message);
    }
}

// return fetch(`${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         });