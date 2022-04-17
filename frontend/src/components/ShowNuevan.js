import React, { Component } from 'react';
import { Navigate, Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


function ShowNuevan (props) {
  //let's us use our parameters
  //try logging params.email
  let params = useParams();
  //a way to access the state with
  //a function component. Eg.
  //https://www.w3schools.com/react/react_usestate.asp
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios
      //TODO: implement the correct URL in the get() call below
      .get('')
      .then(response => {
        //saving the data to Post
        setPost(response.data);
      })
      .catch( err =>{
        console.log("Error from ShowNuevan_get");
      });
  });
  //if our post is null, don't return much.
  if(!post) return "Nothing was got";

  //if our post is populated, return actual information
  return(
    <div>
      {/* Link will go to specified URL*/}
      <Link to="/show"> Back to NuevansList</Link>
      <div>
        <p> Name: {post.name}</p>
        <p> Email: {post.email}</p>
        <p> Role: {post.role}</p>
        <p> Grade: {post.grade}</p>
      </div>
      {/* Link will go to specified URL*/}
      <Link to={'/update-nuevan/'}> Edit Nuevan </Link>
    </div>
  );

}
export default ShowNuevan;
