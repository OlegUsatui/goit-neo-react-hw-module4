import axios from "axios";

const ACCESS_KEY = '5oqRhL3-lPZEtRRM-w4cMpOJUaK5FSUvwHcQ0tLzGDo'


const fetchImages = async (searchQuery, currentPage) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
            query: searchQuery,
            page: currentPage,
            client_id: ACCESS_KEY,
            per_page: 12,
            w: 366,
            h: 250
        },
    });
    return response.data;
};

export default fetchImages;
