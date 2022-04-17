import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(10)

class AddPlayer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: ''
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
      // password: bcrypt.hashSync(this.state.password, salt)
      password: this.state.password
    };
    //now we use axios to communicate with our backend
    axios
      .post('http://localhost:3000/user', data)
      .then(res => {
        //we clear our state and set submitted to true
        //in order to navigate back (see render)
        this.setState({
          name: '',
          password: ''
        })
      })
      .catch(err => {
        console.log("Error in AddPlayer!");
        console.error(err);
      })
  };

  render() {
    let submitted = this.state.submitted;
    return (
      <div>
        {/* If submitted is true, also render <Navigate>
          which auto Navigates to the URL specified
          */
          submitted && (
          <Navigate to="/show" replace={true} />
        )}
        <h2>Add User</h2>
        <p>Create new user</p>
        <form noValidate onSubmit={this.onSubmit}>
          <div>
            <input
              type='text'
              placeholder='Name of Player'
              name='name'
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <input
              type='text'
              placeholder='Password'
              name='password'
              value={this.state.password}
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

export default AddPlayer;
