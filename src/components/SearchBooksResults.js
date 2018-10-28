import React from 'react';
import Book from './Book';

const SearchBooksResults = (props) => {
    return(
        <div className="search-books-results">
            {props.books.length > 0 ? (
                <ol className="books-grid">
                    {props.books.map((book) => {
                        return (
                            <li key={book.id}>
                                <Book book={book} updateBookShelf={props.updateBookShelf} />
                            </li>
                        )
                    }
                    )}
                </ol>

             ):
             (
                <p>No results...</p>
             )}
        </div>        
    );
};

export default SearchBooksResults;