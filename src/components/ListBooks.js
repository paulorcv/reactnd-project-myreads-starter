import React from 'react';
import BookShelf from './BookShelf';
import AddButton from './AddButton';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Loading from './Loading';



const ListBooks = (props) =>{

    const books = props.books;

    return(
        <div className="list-books">
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h5" color='secondary'>
                        My Reads
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="list-books-content">
                <div>
                    {props.loading === true &&
                        <Loading />
                    }
                    <BookShelf title='Currently Reading' type='currentlyReading' books={books} updateBookShelf={props.updateBookShelf} />
                    <BookShelf title='Want to Read' type='wantToRead' books={books} updateBookShelf={props.updateBookShelf} />
                    <BookShelf title='Read' type='read' books={books} updateBookShelf={props.updateBookShelf} />
                </div>
            </div>
            <AddButton />
        </div>
    );
}

ListBooks.propTypes = {
    books: PropTypes.array
}

export default ListBooks;