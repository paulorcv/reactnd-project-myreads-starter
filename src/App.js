import React from 'react'
import * as BooksAPI from './components/BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks';
import ListBooks from './components/ListBooks';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooks: []
  }

  constructor(props){
    super(props);
    this.updateBookShelf = this.updateBookShelf.bind(this);
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })     
  }

  updateBookShelf(book, shelf){

    book.shelf = shelf;
    BooksAPI.update(book, shelf)
      .then((res) => {
        console.log(res);
      });
    this.setState((oldState) =>({
      books: oldState.books.filter(bookFilter => bookFilter.id !== book.id).concat(book)
    }));
  }

  render() {
    const books = this.state.books;

    return (
      <div className="app">
        <Route path='/search' render={()=>(
            <SearchBooks/>
         )}/>
         <Route exact path='/' render={()=>(
          <ListBooks books={books} updateBookShelf={this.updateBookShelf}/>
         )}/>        
      </div>
    )
  }
}

export default BooksApp
