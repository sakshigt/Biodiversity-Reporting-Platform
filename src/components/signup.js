import React, { Component } from 'react';
import './signup.css';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      email: "",
      password: "",
      errorMessage: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    const { name, address, email, password } = this.state;
    if (!name || !address || !email || !password) {
      this.setState({ errorMessage: "All fields are required." });
      return false;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      this.setState({ errorMessage: "Invalid email format." });
      return false;
    }
    this.setState({ errorMessage: "" });
    return true;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.validateForm()) {
      return;
    }

    const { name, address, email, password } = this.state;

    fetch("http://localhost:8081/bio/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, address, email, password })  // Correctly pass the state data
    })
    .then(response => {
      if (!response.ok) {
        return response.json().then(error => { throw new Error(error.message); });
      }
      return response.json();
    })
    .then(data => {
      alert("New User Added Successfully!");
      this.setState({ name: "", address: "", email: "", password: "" }); // Clear the form
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error: ' + error.message);
    });
  }

  render() {
    return (
      <div className="content-box">
        <form onSubmit={this.handleSubmit}>
          <h3>Sign Up</h3>

          {this.state.errorMessage && (
            <div className="alert alert-danger" role="alert">
              {this.state.errorMessage}
            </div>
          )}

          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Address</label>
            <input 
              type="text"
              className="form-control"
              placeholder="Address"
              value={this.state.address}
              onChange={(e) => this.setState({ address: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    );
  }
}
