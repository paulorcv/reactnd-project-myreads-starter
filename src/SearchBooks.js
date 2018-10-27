import React from 'react';
import SearchBooksResults from './SearchBooksResults';
import SearchBooksBar from './SearchBooksBar';

const SearchBooks = () => {
    return(
        <div className="search-books">
            <SearchBooksBar />
            <SearchBooksResults />
        </div>
    );
};

export default SearchBooks;