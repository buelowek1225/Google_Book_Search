// may need to remove components to navigate to import files
import React from 'react';
import '../../App.css';
import SavedBook from '../../components/SavedBook';
import API from '../../utils/API'

export default class SearchBooks extends React.Component {
  state = {
    books: []
  }

  fetchBooks = () => (
    API.getBooks()
      // .then( books => this.setState({books: books}))
      .then((books) => {
        console.log(books);
        this.setState({books: books.data});
      })
  )
  componentDidMount (){
    this.fetchBooks();
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
        <div className="container1">
          <div className="resultsContainer">
            <h4>Saved Books</h4>
            {
            this.state.books.map( (book, i) => <SavedBook 
              key={i}
              title={book.title}
              authors={book.authors}
              description={book.description}
              image={book.image}
              link={book.link}
              handleSaveRequest={this.handleSaveRequest}
            />)
          }
          </div>
        </div>        
      </div>
    );
  }
}

