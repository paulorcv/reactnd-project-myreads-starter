import React from 'react';
import SearchBooksResults from './SearchBooksResults';
import SearchBooksBar from './SearchBooksBar';
import PropTypes from 'prop-types';

const SearchBooks = (props) => {

    return(
        <div className="search-books">
            <SearchBooksBar searchBook={props.searchBook} />
            <SearchBooksResults books={props.books} />
        </div>
    );
};

SearchBooks.propTypes = {
    books: PropTypes.array,
    searchBook: PropTypes.func.isRequired
};

export default SearchBooks;