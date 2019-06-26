// may need to remove components to navigate to import files
import React from 'react';
import '../../App.css';
import GoogleBooks from '../../components/GoogleBooks';
import Search from '../../components/Search';
import API from '../../utils/API'

export default class SearchBooks extends React.Component {
  state = {
    books: [],
    bookSearch:""
  }

  // handle the book search button submit
  handleSearchRequest = event => {
    // prevents default refresh
    event.preventDefault();
    API.getBooks("Harry Potter")
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  render () {
    return (
      <div>
        {/* we are passing the handleSearchRequest function to the Search Component */}
        <Search
          search={this.state.bookSearch} 
          handleSearchRequest={this.handleSearchRequest}
          handleInputChange={this.state.results}
        />
        <GoogleResults results={this.state.results} />
        <GoogleBooks />
      </div>
    );
  }
}

