import React, {Component} from 'react';
import Book from './Book';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';



class BookShelf extends Component{

    render(){
        
        const books = this.props.books;        
        const typeOfShelf = this.props.type;

        return(
            <div className="bookshelf">                
                <Typography className="bookshelf-title" component="h5" variant="h5" gutterBottom>
                    {this.props.title}
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