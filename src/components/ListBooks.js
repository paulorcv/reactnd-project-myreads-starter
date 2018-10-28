import React from 'react';
import BookShelf from './BookShelf';
import AddButton from './AddButton';

const ListBooks = (props) =>{

    const books = props.books;

    return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf title='Currently Reading'  books={books} />
                    <BookShelf title='Want to Read' books={books} />
                    <BookShelf title='Read' books={books} />
                </div>
            </div>
            <AddButton />
        </div>
    );
}

export default ListBooks;