import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';
import SearchIcon from '@material-ui/icons/Search';


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

    componentDidMount(){
        this.props.searchBook('');
    }

    componentWillUnmount() {
        this.props.searchBook('');
    }

    
    render(){
        return(
            <div className="search-books-bar">
                <AppBar position="static">
                    <Toolbar>                        
                        <IconButton  aria-label="Open drawer">
                        <Link to='/'>
                           <KeyboardBackspace color="secondary" />
                        </Link> 
                        </IconButton>
                        <InputBase color="secondary" onChange={this.handleChange}
                            placeholder="Search by title or author"
                            />
                        <div>
                            <SearchIcon color="secondary"/>
                        </div>                            
                        
                    </Toolbar>
                </AppBar>
            </div>            
        )
    }

}

SearchBooksBar.prototypes = {
    searchBook: PropType.func.isRequired,
    classes: PropType.object.isRequired,
}

export default SearchBooksBar;