import React, { Component } from 'react';
import { Navigate, Link } from 'react-router-dom';
import axios from 'axios';

class UpdateNuevan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email:'',
      role:'',
      grade:'',
      submitted: null,
    };
  }

  onChange = e => {
    //the target.name will refer to the form name= section
    //in the html form below (in the render)
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    //this is akin to making our JSON object
    //on postman
    const data = {
      name: this.state.name,
      email: this.state.email,
      role: this.state.role,
      grade: this.state.grade,
    };

    //now we use axios to communicate with our backend
    //look at routes.js in the backend
    //to know what
    axios
      .put('http://localhost:8082/update/' +data.email, data)
      .then(res => {
        this.setState({
          name: '',
          email:'',
          role:'',
          grade:'',
          submitted: true,
        })
      })
      .catch(err => {
        console.log("Error in UpdateNuevan!");
        console.error(err);
      })
  };

  render() {
    //seeing if we have submitted already
    let submitted = this.state.submitted;
    return (
      <div>
        {/* Link will go to specified URL*/}
        <Link to="/show"> Back to NuevansList</Link>
        {/* If submitted is true, also render <Navigate>
          which auto Navigates to the URL specified
          */
          submitted && (
          <Navigate to="/show" replace={true} />
        )}
        <h2>Update Book</h2>
        <p>Update new book</p>
        <form noValidate onSubmit={this.onSubmit}>
          <div>
            <input
              type='text'
              placeholder='Name of Nuevan'
              name='name'
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <input
              type='text'
              placeholder='Email of Nuevan'
              name='email'
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <input
              type='text'
              placeholder='Role of Nuevan'
              name='role'
              value={this.state.role}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <input
              type='text'
              placeholder='Grade of Nuevan'
              name='grade'
              value={this.state.grade}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type = 'submit'>Click to submit</button>
        </form>
      </div>
    );
  }
}

export default UpdateNuevan;
