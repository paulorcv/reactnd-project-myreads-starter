import React, {Component} from 'react';
import Book from './Book';

class BookShelf extends Component{

    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <Book title='Título do Livo1' authors='Autor do Livro1' />
                        </li>
                        <li>
                            <Book title='Título do Livo2' authors='Autor do Livro2' />
                        </li>
                        <li>
                            <Book title='Título do Livo3' authors='Autor do Livro3' />
                        </li>
                        <li>
                            <Book title='Título do Livo4' authors='Autor do Livro4' />
                        </li>
                    </ol>
                </div>
            </div>            
        );
    }
}

export default BookShelf;