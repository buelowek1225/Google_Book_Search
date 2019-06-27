import React from "react";
import { Button } from 'reactstrap';
import './index.css';

// must use props to bring in the props and children
function GoogleBooks(props) {
  return (
        <div className="boxEachResult">
          <div className="row">
            <div className="col-md-12">
              <h5 className= "title">{props.title}</h5>
              <Button className="float-right btn-v" color="secondary"><a href={props.link} className="link">View</a></Button>{' '}
              <Button onClick={() => props.handleSaveRequest(props)} className="float-right btn-s" color="secondary">Save</Button>{' '}
              <h6 className="author">Author(s): {props.author}</h6>
              <img src={props.image} class="rounded float-left bookImage" alt="exampleimage"></img>
              <h6 className="bookDescrip">{props.description}</h6>
            </div>
          </div>
        </div>
  );
}

export default GoogleBooks;
