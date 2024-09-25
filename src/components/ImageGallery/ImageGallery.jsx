import React from 'react';
import ImageCard from "../ImageCard/ImageCard.jsx";
import styles from './ImageGallery.module.css';

const ImageGallery = ({images}) => {
    return (
        <ul className={styles.gallery}>
            {
                images.map((image) => {
                    return (
                        <ImageCard key={image.id} image={image}/>
                    )
                })
            }

        </ul>
    );
};

export default ImageGallery;
