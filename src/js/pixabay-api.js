export default function searchImagesByQuery(query) {
    const URL = "https://pixabay.com/api/";
    const API_KEY = "45237784-d0fd30a4ec7a7095f46d82183";

    return fetch(`${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}