import React, {useState} from 'react';
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import Loader from "./components/Loader/Loader.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import fetchImages from "./components/fetchImages.js";


const App = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [error, setError] = useState(null);

    const updateImages = (data, currentPage) => {
        console.log(data)
        setImages(prevImages => (currentPage === 1 ? data.results : [...prevImages, ...data.results]));
    };

    const getImages = async (searchQuery, currentPage = 1) => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchImages(searchQuery, currentPage);
            updateImages(data, currentPage);
        } catch (error) {
            setError('Something went wrong while fetching the images.');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
        setPage(1);
        getImages(searchQuery, 1);
    };


    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        getImages(query, nextPage);
    }

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            {error && <p>{error}</p>}
            {images.length > 0 && <ImageGallery images={images}/>}
            {loading && <Loader />}
            {!loading && images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
        </div>
    );
};

export default App;
