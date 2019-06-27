import axios from "axios";

// The getBooks method retrieves books from the Google Books API
// It accepts a "query" or term to search the recipe api for
export default {
  searchBooks: function(query) {
    return axios.get("/api/searchBooks", { params: { q: query } });
  },
  // postdata varaible = data, extracting the fields
  postBook: function(data) {
    return axios.post("/api/books", {
      title: data.title,
      authors: data.authors,
      description: data.description,
      image: data.image,
      link: data.link
    })
  },
  getBooks: function() {
    return axios.get("/api/books");
  }
};
