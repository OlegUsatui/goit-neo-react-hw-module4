import React, {useState} from 'react';
import styles from './SearchBar.module.css';
import {FaSearch} from 'react-icons/fa';

const SearchBar = ({onSearch}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            onSearch(inputValue);
        }
    };
    return (
        <header className={styles.searchBar}>
            <form onSubmit={handleSubmit} className={styles.searchInputContainer}>
                <button type="submit" className={styles.searchButton}>
                    <FaSearch/>
                </button>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className={styles.searchInput}
                    placeholder="Search..."
                />
            </form>
        </header>
    );
};

export default SearchBar;
