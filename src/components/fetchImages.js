import axios from "axios";

const ACCESS_KEY = '5oqRhL3-lPZEtRRM-w4cMpOJUaK5FSUvwHcQ0tLzGDo'


const fetchImages = async (searchQuery, currentPage) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
            query: searchQuery,
            page: currentPage,
            client_id: ACCESS_KEY
        },
    });
    return response.data;
};

export default fetchImages;
