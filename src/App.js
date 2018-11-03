import React from 'react'
import * as BooksAPI from './components/BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks';
import ListBooks from './components/ListBooks';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';


class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooks: [],
    loading: false
  }

  constructor(props){
    super(props);
    this.updateBookShelf = this.updateBookShelf.bind(this);
    this.searchBook = this.searchBook.bind(this);
    this.state.loading = false;
  }
  componentWillMount() {
    this.searchBook = this.debounce(this.searchBook, 1000);
  }

  componentDidMount(){
    this.setState({ loading: true });
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books,
          loading: false

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
      books: oldState.books.filter(bookFilter => bookFilter.id !== book.id).concat(book),
    }));
  }

  clearSearchBooks = () => {
    this.setState(() => ({
      searchBooks: [],
      loading: false
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
    this.setState(() => ({searchBooks}));
    }

  searchBook(query){
    this.clearSearchBooks();
    this.setState({ loading: true });

    query.trim() !== '' && ( 
      BooksAPI.search(query)
        .then((searchBooks) => {
          searchBooks.error ? (this.clearSearchBooks() ) : ( this.filterSearchBooks(searchBooks));
          this.setState({ loading: false });
        })
    );  
    this.setState({ loading: false });
  }

  debounce = (func, wait, immediate) =>{
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  render() {
    const books = this.state.books;
    const searchBooks = this.state.searchBooks;

    return (
      <div className="app">
        <CssBaseline />
        <Route path='/search' render={()=>(
          <SearchBooks books={searchBooks} searchBook={this.searchBook} updateBookShelf={this.updateBookShelf} loading={this.state.loading}/>
         )}/>
         <Route exact path='/' render={()=>(
          <ListBooks books={books} updateBookShelf={this.updateBookShelf} loading={this.state.loading}/>
         )}/>        
      </div>
    )
  }
}

export default BooksApp
