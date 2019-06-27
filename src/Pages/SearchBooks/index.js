// may need to remove components to navigate to import files
import React from 'react';
import '../../App.css';
import GoogleBooks from '../../components/GoogleBooks';
import Search from '../../components/Search';
import API from '../../utils/API'

export default class SearchBooks extends React.Component {
  state = {
    books: [],
    search:""
  }

  // To mount components, setup defaults
  // componentDidMount() {
  //   this.getBooks(this.state.bookSearch);
  // }

  handleInputChange = event => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      // name is the search (was set on form input) and value is a property of the search state
      [name]: value
    });
  };

  // handle the book search button submit
  handleSearchRequest = event => {
    // prevents default refresh
    event.preventDefault();
    API.searchBooks(this.state.search)
    .then(res => {
      console.log(res.data.items);
      this.setState({
        books: res.data.items
      })

    })
    .catch(err => console.log(err));
  }

  // handleSaveRequest bring data from the props and assigns it to the post data variable/object
  handleSaveRequest = data => {
    // console.log(data);
    const postData = {
      title: data.title,
      authors: data.authors,
      description: data.description,
      image: data.image,
      link: data.link
    }
    // adding the data to the database
    API.postBook(postData)
      .then(function (response) {
        console.log("done");
      })
  }

  render () {
    return (
      <div>
        {/* we are passing the handleSearchRequest function to the Search Component */}
        <Search
          search={this.state.bookSearch} 
          handleSearchRequest={this.handleSearchRequest}
          handleInputChange={this.handleInputChange}
        />
      <div className="container1">
        <div className="resultsContainer">
          <h4>Results</h4>
          {
          this.state.books.map( (book, i) => <GoogleBooks 
            key={i}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks.smallThumbnail}
            link={book.volumeInfo.previewLink}
            handleSaveRequest={this.handleSaveRequest}
          />)
        }
        </div>
      </div>        
      </div>
    );
  }
}

