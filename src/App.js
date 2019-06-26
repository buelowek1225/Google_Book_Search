import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Search from "./components/Search";
import Saved from "./components/SavedBook";
import Nav from "./components/Navigation";
import './App.css';
import Jumbotron from './components/Jumbotron';
import GoogleBooks from "./components/GoogleBooks";
import SavedBooks from './Pages/SavedBooks';
import SearchBooks from './Pages/SearchBooks';
import API from "./utils/API";

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Nav />
          <Jumbotron />
          <Route exact path="/search" component={SearchBooks} />
          <Route exact path="/saved" component={SavedBooks} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
