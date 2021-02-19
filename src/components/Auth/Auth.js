import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { loginUser } from "../../redux/reducer";

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      newUser: false,
    };
  }

  register = () => {
    const { firstName, lastName, email, password } = this.state;
    axios
      .post("/auth/register", { firstName, lastName, email, password })
      .then((res) => {
        this.props.loginUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert("User already exists");
      });
  };

  login = () => {
    const { email, password } = this.state;
    axios
      .post("/auth/login", { email, password })
      .then((res) => {
        this.props.loginUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert("Incorrect email or password");
      });
  };

  toggle = () => {
    this.setState({ newUser: !this.state.newUser });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { firstName, lastName, email, password } = this.state;
    return (
      <div className="container">
        {!this.state.newUser ? (
          <div id="inputs">
            <h1 className="login">Login</h1>
            <input
              className="inputs"
              name="email"
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => this.changeHandler(e)}
            ></input>
            <input
              className="inputs"
              name="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => this.changeHandler(e)}
            ></input>
            <div className="buttons">
              <button onClick={this.login}>Login</button>
              <button onClick={this.toggle}>Register</button>
            </div>
          </div>
        ) : (
          <div id="inputs">
            <h1>Register</h1>
            <input
              className="inputs"
              name="firstName"
              type="text"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => this.changeHandler(e)}
            ></input>
            <input
              className="inputs"
              name="lastName"
              type="text"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => this.changeHandler(e)}
            ></input>
            <input
              className="inputs"
              name="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => this.changeHandler(e)}
            ></input>
            <input
              className="inputs"
              name="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => this.changeHandler(e)}
            ></input>
            <div id="buttons">
              <button onClick={this.register}>Register</button>
              <button onClick={this.toggle}>Already A User</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { loginUser })(Auth);
