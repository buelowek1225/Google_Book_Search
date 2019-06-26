import React from "react";
import './index.css';

function GoogleBooks() {
  return (
    <div className="container1">
      <div className="resultsContainer">
        <h4>Results</h4>
          <div className="boxEachResult">
            <div className="row">
              <div className="col-md-12">
                <h5 className= "title">Title</h5>
                <h6 className="author"> Written By: J K Rowling</h6>
                <img src="https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone#/media/File:Harry_Potter_and_the_Philosopher's_Stone_Book_Cover.jpg" class="rounded float-left" alt="exampleimage"></img>
                <h6>Harry Potter</h6>
                <p className="bookDescrip">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default GoogleBooks;
