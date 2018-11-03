import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

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
        const bookImage = !book.imageLinks ?  'defaultImage' : book.imageLinks.thumbnail;    

        return (
            <Card elevation='24'>
                <CardActionArea className='card-action'
                style={{
                    display: 'flex',
                    margin: 10,
                    width: 330,
                    flexDirection: 'row',}}
                    >
                    <CardContent className='card-content'>
                        <Typography gutterBottom variant="h5" component="h2">
                            {book.title}
                        </Typography>
                        <Typography component="p">
                            {book.authors}
                        </Typography>
                    </CardContent>
                    <Divider />
                    <CardMedia style={{
                        width: 128, height: 193,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,}}
                        component="img"
                        image={bookImage}                        
                        title="Book Cover"
                    />
                </CardActionArea>
                <CardActions>
                    <Select
                        value={this.state.selectedValue}
                        onChange={this.handleChange}>
                        <MenuItem value="move">Move to...</MenuItem>
                        <MenuItem value="currentlyReading">Currently Reading</MenuItem>
                        <MenuItem value="read">Read</MenuItem>
                        <MenuItem value="wantToRead">Want to Read</MenuItem>
                        <MenuItem value="none">None</MenuItem>
                    </Select>
                </CardActions>
            </Card>          
        );

    }
}

Book.propTypes = {
    books: PropTypes.array,
    updateBookShelf: PropTypes.func.isRequired
}

export default Book;