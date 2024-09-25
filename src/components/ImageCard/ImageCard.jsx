import React from 'react';
import styles from './ImageCard.module.css';

const ImageCard = ({image}) => {
    return (
        <li className={styles.galleryItem}>
            <img src={image.urls.small} alt={image.alt_description}/>
        </li>
    );
};

export default ImageCard;
