import React, {useEffect, useState} from 'react';
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import Loader from "./components/Loader/Loader.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import api from "./components/api.js";
import ImageModal from "./components/ImageModal/ImageModal.jsx";


const App = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };


    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage(null);
    };
    const updateImages = (data, currentPage) => {
        setImages(prevImages => (currentPage === 1 ? data.results : [...prevImages, ...data.results]));
    };

    const getImages = async (searchQuery, currentPage = 1) => {
        setLoading(true);
        setError(null);
        try {
            const data = await api(searchQuery, currentPage);
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

    useEffect(() => {
        if (images.length > 0) {
            setTimeout(() => {
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth'
                });
            }, 500);
        }
    }, [images]);

    return (
        <div>
            <SearchBar onSearch={handleSearch}/>
            {error && <p>{error}</p>}
            {images.length > 0 && <ImageGallery images={images} openModal={openModal}/>}
            {loading && <Loader/>}
            {!loading && images.length > 0 && <LoadMoreBtn onClick={handleLoadMore}/>}
            {modalIsOpen && selectedImage && (
                <ImageModal
                    image={selectedImage}
                    isOpen={modalIsOpen}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
};

export default App;
