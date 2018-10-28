import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';

class SearchBooksBar extends Component{
    
    state = {
        query: ''
    }

    handleChange = (event) => {
        const query = event.target.value;        
        this.props.searchBook(query);
        return( 
            this.setState({
                query
            })
            
        )
    }
    
    render(){
        return(
            <div className="search-books-bar">
                <Link to='/' className='close-search'>Close </Link>            
                <div className="search-books-input-wrapper">
                    <input type="text" onChange={this.handleChange} placeholder="Search by title or author" />

                </div>
            </div>        
        )
    }

}

SearchBooksBar.prototypes = {
    searchBook: PropType.func.isRequired
}

export default SearchBooksBar;