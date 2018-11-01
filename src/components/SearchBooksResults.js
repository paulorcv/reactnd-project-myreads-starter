import React from 'react';
import Book from './Book';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
                    <Card style={{ width: 400, padding: 30 }}>
                        <CardContent> 
                            <Typography color="textPrimary" gutterBottom>
                                NO RESULTS...
                            </Typography>
                        </CardContent>
                    </Card>             )}
        </div>        
    );
};

export default SearchBooksResults;