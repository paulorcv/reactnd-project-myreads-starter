import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

    state = {
        selectedValue: ''
    }

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.setState({selectedValue: this.props.book.shelf});
    }

    handleChange(event){
        this.setState({selectedValue: event.target.value});
        this.props.updateBookShelf(this.props.book, event.target.value);        
    }

    render(){
        const book = this.props.book;
        const bookImage = !book.imageLinks?  '' : book.imageLinks.thumbnail;    

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookImage}")` }}></div>
                    <div className="book-shelf-changer">
                        <select value={this.state.selectedValue} onChange={this.handleChange}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        );

    }
}

Book.propTypes = {
    books: PropTypes.array,
    updateBookShelf: PropTypes.func.isRequired
}

export default Book;