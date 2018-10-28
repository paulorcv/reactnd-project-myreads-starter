import React, {Component} from 'react';
import Book from './Book';

class BookShelf extends Component{

    render(){
        
        const books = this.props.books;        
        const typeOfShelf = this.props.type;

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">         
                        { books.filter((book) => book.shelf===typeOfShelf).map( (book) => {
                            return(
                                <li key={book.id}>
                                    <Book book={book} updateBookShelf={this.props.updateBookShelf}/>
                                </li>                                
                        )}
                        )}               
                    </ol>
                </div>
            </div>            
        );
    }
}

export default BookShelf;