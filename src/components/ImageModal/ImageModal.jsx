import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

const ImageModal = ({ image, isOpen, closeModal }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Image Modal"
            className={styles.modalContent}
            overlayClassName={styles.modalOverlay}
        >
            <img src={image.urls.regular} alt={image.alt_description} className={styles.modalImage} />
        </Modal>
    );
};

export default ImageModal;
