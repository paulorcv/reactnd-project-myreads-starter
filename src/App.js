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
    this.searchBook = this.searchBook.bind(this);
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

  clearSearchBooks = () => {
    this.setState(() => ({
      searchBooks: []
    }))    
  }

  returnbookInTheShelf = (book) =>{
    
    let bookFound = book;   
    bookFound.shelf = 'none'; 
    
    this.state.books.forEach( bookInShelf => {
      if (bookInShelf.id === book.id) bookFound = bookInShelf;
    })

    return (bookFound);

  }

  filterSearchBooks = (searchBooks) =>{
    searchBooks = searchBooks.map((book) => (
      this.returnbookInTheShelf(book)
    ));

    this.setState(() => ({ searchBooks }));

    }

  searchBook(query){
    
    this.clearSearchBooks();

    query.trim() !== '' && ( 
      BooksAPI.search(query)
        .then((searchBooks) => {
          searchBooks.error ?
            (
              this.clearSearchBooks()
            )
            :
            (
              this.filterSearchBooks(searchBooks)   
            );
        })
    );


        
  }

  render() {
    const books = this.state.books;
    const searchBooks = this.state.searchBooks;

    return (
      <div className="app">
        <Route path='/search' render={()=>(
          <SearchBooks books={searchBooks} searchBook={this.searchBook} updateBookShelf={this.updateBookShelf}/>
         )}/>
         <Route exact path='/' render={()=>(
          <ListBooks books={books} updateBookShelf={this.updateBookShelf}/>
         )}/>        
      </div>
    )
  }
}

export default BooksApp
