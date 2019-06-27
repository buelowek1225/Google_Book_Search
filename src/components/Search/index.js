import React from "react";
import './index.css';

function Search(props) {
  return (
    <form className="searchPane">
      <div className="formSpace">
        <div>
          <br></br>
          <h4>Book Search</h4>
        </div>
        <div className="form-group">
          <br></br>
          <label>Book:</label>
          <br></br>
          {/* <input className="form-control" placeholder="Harry Potter"></input> */}

          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for a Book"
            id="search"
          />


        </div>
        <button onClick={props.handleSearchRequest} type="submit" className="btn btn-primary float-right">Search</button>
      </div>
    </form>
  );
}

export default Search;