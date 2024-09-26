import React from 'react';
import styles from './ImageCard.module.css';

const ImageCard = ({image, openModal}) => {
    return (
        <li className={styles.galleryItem}>
            <img src={image.urls.small} alt={image.alt_description} onClick={() => openModal(image)}/>
        </li>
    );
};

export default ImageCard;
