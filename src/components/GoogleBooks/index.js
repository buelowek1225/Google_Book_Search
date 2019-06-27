import React from "react";
import './index.css';

// must use props to bring in the props and children
function GoogleBooks(props) {
  return (
        <div className="boxEachResult">
          <div className="row">
            <div className="col-md-12">
              <h5 className= "title">{props.title}</h5>
              <h6 className="author">Author(s): {props.author}</h6>
              <h6 className="link">Google Book: <a href={props.link}>{props.title}</a></h6>
              <img src={props.image} class="rounded float-left bookImage" alt="exampleimage"></img>
              <h6 className="bookDescrip">{props.description}</h6>
            </div>
          </div>
        </div>
  );
}

export default GoogleBooks;
