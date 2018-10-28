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
                    <BookShelf title='Currently Reading' type='currentlyReading'  books={books} />
                    <BookShelf title='Want to Read' type='wantToRead' books={books} />
                    <BookShelf title='Read' type='read' books={books} />
                </div>
            </div>
            <AddButton />
        </div>
    );
}

export default ListBooks;