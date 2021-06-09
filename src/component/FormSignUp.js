import React, { Component } from "react";
import "../style/formSignUp.css";
import stock_pic from "../pics/thinking.jpg";
import axios from "axios";
import work from "../pics/Work_6.jpg";
import Login from "../component/Login";
import { Link } from "react-router-dom";

export default class FormSignUP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        username: "",
        email: "",
        password: "",
        password2: "",
      },
      isSubmit: false,
      isChange: false,
      errors: {
        // username: '',
        // email: '',
        // password:'',
        // password2: ''
      },
      errorsServer: ""
    };
  }
  componentDidMount(){
    this.setState({isChange: false})
  }
  handleOnChange = async (event) => {
    const name = event.target.name;
    const value = event.target.value;
    await this.setState({
      userInfo: { ...this.state.userInfo, [name]: value },
      errors: {},
    });
    console.log(this.state);

    console.log(this.checkInput());
  };
  handleOnSubmit = (submit) => {
    submit.preventDefault();
    let userForm = this.state.userInfo;
    delete userForm['password2'];
    console.log(userForm)
    this.setState({ errors: this.checkInput() });
    if (this.state.isSubmit) {
      axios.defaults.withCredentials = true;
      axios
        .post("http://localhost:3001/stock/app/signup", userForm)
        .then(res =>  {
          this.setState({ isChange: true })
          this.sendEmail()
        })
        .catch(err => this.setState({ 
          errorsServer: err.response.data.message,
          userInfo: { ...this.state.userInfo,password:"", password2:"" }
         }));
    }
  };
  sendEmail(){
    let emailInfo = {email: this.state.userInfo.email, username:this.state.userInfo.username}
    console.log(emailInfo)
    axios.post("http://localhost:3001/stock/app/sendEmail", emailInfo)
         .then(res => (console.log(res)))
         .catch(err => console.log(err))
  }
  checkInput() {
    let errors = {};

    if (!this.state.userInfo.username.trim()) {
      errors.username = "Username required";
    }
    if (!this.state.userInfo.email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(this.state.userInfo.email)) {
      errors.email = "Email address is invalid";
    }
    if (!this.state.userInfo.password) {
      errors.password = "Password is required";
    } else if (this.state.userInfo.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    }

    if (!this.state.userInfo.password2) {
      errors.password2 = "Password is required";
    } else if (this.state.userInfo.password2 !== this.state.userInfo.password) {
      errors.password2 = "Passwords do not match";
    } else {
      this.setState({ isSubmit: true });
    }
    return errors;
  }

  render() {
    const changeForm = this.state.isChange;
    if (!this.props.show) {
      return null;
    } else {
      return (
        <>
          <div className="form-container">
            <span className="close-btn" onClick={this.props.onClose}>
              ×
            </span>
            <div className="form-content-left">
              <img className="form-img" src={stock_pic} alt="people hike" />
            </div>
            {!changeForm ? (
              <div className="form-content-right">
                <form onSubmit={this.handleOnSubmit} className="form">
                  <h1>
                    Get started with me today! Create your account by filling
                    out the information below.
                  </h1>
                  {<p>{this.state.errorsServer}</p>}
                  <div className="form-inputs">
                    <label className="form-label">Username</label>
                    <input
                      className="form-input"
                      type="text"
                      name="username"
                      placeholder="Enter your username"
                      value={this.state.userInfo.username}
                      onChange={this.handleOnChange}
                    />
                    {<p>{this.state.errors.username}</p>}
                  </div>
                  <div className="form-inputs">
                    <label className="form-label">Email</label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={this.state.userInfo.email}
                      onChange={this.handleOnChange}
                    />
                    {<p>{this.state.errors.email}</p>}
                  </div>
                  <div className="form-inputs">
                    <label className="form-label">Password</label>
                    <input
                      className="form-input"
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={this.state.userInfo.password}
                      onChange={this.handleOnChange}
                    />
                    {<p>{this.state.errors.password}</p>}
                  </div>
                  <div className="form-inputs">
                    <label className="form-label">Confirm Password</label>
                    <input
                      className="form-input"
                      type="password"
                      name="password2"
                      placeholder="Confirm your password"
                      value={this.state.userInfo.password2}
                      onChange={this.handleOnChange}
                    />
                    {<p>{this.state.errors.password2}</p>}
                  </div>
                  <button className="form-input-btn" type="submit">
                    Sign up
                  </button>
                  <div className="form-footer">
                    <span className="form-input-login">
                      Already have an account? Please login.
                    </span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="form-content-right">
                <h1 className="form-success">We have received your request!</h1>
                <img className="form-img-2" src={work} alt="success-image" />
              </div>
            )}
          </div>
        </>
      );
    }
  }
}
