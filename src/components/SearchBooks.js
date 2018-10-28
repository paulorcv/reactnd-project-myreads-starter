import React from 'react';
import SearchBooksResults from './SearchBooksResults';
import SearchBooksBar from './SearchBooksBar';
import PropTypes from 'prop-types';

const SearchBooks = () => {
    return(
        <div className="search-books">
            <SearchBooksBar />
            <SearchBooksResults />
        </div>
    );
};

SearchBooks.propTypes = {
    books: PropTypes.array
};

export default SearchBooks;