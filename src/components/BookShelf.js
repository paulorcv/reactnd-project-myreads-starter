import React, {Component} from 'react';
import Book from './Book';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import DoneIcon from '@material-ui/icons/Done';




class BookShelf extends Component{

    render(){
        
        const books = this.props.books;        
        const typeOfShelf = this.props.type;

        return(
            <div className="bookshelf">                
                <Typography align='center' className="bookshelf-title" component="h5" variant="h5">
                {typeOfShelf === 'read' &&
                    <DoneIcon color='primary' fontSize='inherit'/>
                }
                {typeOfShelf === 'wantToRead' &&
                    <LibraryAddIcon color='primary' fontSize='inherit'/>
                }
                {typeOfShelf === 'currentlyReading' &&
                    <LocalLibraryIcon color='primary' fontSize='inherit'/>
                }                                

                {' '}{this.props.title}
                </Typography>
                <div className="bookshelf-books">                    
                    <ul className="books-grid">         
                        { books.filter((book) => book.shelf===typeOfShelf).map( (book) => {
                            return(
                                <li key={book.id}>
                                    <Book book={book} updateBookShelf={this.props.updateBookShelf}/>
                                </li>                                
                        )}
                        )}               
                    </ul>                    
                </div>
            </div>            
        );
    }
}

BookShelf.propTypes = {
    books: PropTypes.array,
    updateBookShelf: PropTypes.func.isRequired
}

export default BookShelf;