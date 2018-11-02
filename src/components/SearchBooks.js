import React from 'react';
import SearchBooksResults from './SearchBooksResults';
import SearchBooksBar from './SearchBooksBar';
import PropTypes from 'prop-types';
import Loading from './Loading';

const SearchBooks = (props) => {
    return(
        <div className="search-books">
            <SearchBooksBar searchBook={props.searchBook} />
            { props.loading === true ? (
                <Loading />
            ) : (
                <SearchBooksResults books={props.books} updateBookShelf={props.updateBookShelf}/>
            )} 
        </div>
    );
};

SearchBooks.propTypes = {
    books: PropTypes.array,
    searchBook: PropTypes.func.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
};

export default SearchBooks;