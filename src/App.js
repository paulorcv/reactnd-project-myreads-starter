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

  componentDidMount(){
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
     
  }

  render() {
    const books = this.state.books;

    return (
      <div className="app">
        <Route path='/search' render={()=>(
            <SearchBooks/>
         )}/>
         <Route exact path='/' render={()=>(
         <ListBooks books={books} />
         )}/>        
      </div>
    )
  }
}

export default BooksApp
