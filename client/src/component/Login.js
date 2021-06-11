import "../style/login.css";
import React, {useState} from "react";
import fear from "../pics/Feelthefear.jpg";
import history from "../routes/history";
import axios from "axios";
export const LoginForm = (props) => {
  const [userLogin, setUserLogin] = useState({ username: "", password: "" });
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorUserName, setErrorUserName] = useState("");
  const [errorPW, setErrorPW] = useState("");
  const [errorServer, setErrorServer] = useState("");
  


  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserLogin({ ...userLogin, [name]: value });
    setErrorPW("");
    setErrorUserName("");
    setErrorServer("")
  };
  const handleOnSubmit = (submit) => {
    submit.preventDefault();
    checkValid();
    const UserLogin = userLogin;
    const isSend = isSubmit;

    if (isSend) {
      // axios.defaults.withCredentials = true;
      axios
        .post("https://stockapp-vince.herokuapp.com/api/up/login", UserLogin)
        .then((res) => {
          getUserContext()
        })
        .catch((err) => {
          setErrorServer(err.response.data.message);
        });
    }
   
  };
  const getUserContext = async () => {
    // axios.defaults.withCredentials = true;
    await axios
      .get("https://stockapp-vince.herokuapp.com/api/down/user/data")
      .then((res) => {
        console.log(res)
        localStorage.setItem("UserData", JSON.stringify(res.data));
        // history.push({pathname:'/user/home'})
      })
      .catch((err) => console.log(err));

    
  };
  const checkValid = () => {
    if (!userLogin.username.trim()) {
      setErrorUserName("Username required");
    }
    if (!userLogin.password) {
      setErrorPW("Password is required");
    } else if (userLogin.password.length < 6) {
      setErrorPW("Password needs to be 6 characters or more");
    } else {
      setIsSubmit(true);
    }
  };
  
    if(!props.show){
      return null;
    }else{
      return (
    
    <>
      <div className="formlg-overlay">
      <div className="formlg-container">
        <span className="close-btn" onClick={props.onClose}>
          ×
        </span>
        <div className="formlg-content-left">
          <img className="formlg-img" src={fear} alt="space people" />
        </div>
        <div className="formlg-content-right">
          <form onSubmit={handleOnSubmit} className="formlg">
            <div className="formlg-title">
              <h1>User Login</h1>
              <h3>Welcome to the website</h3>
              {<p>{errorServer}</p>}
            </div>
            <div className="formlg-inputs">
              <label className="formlg-label">Username</label>
              <input
                className="form-input"
                name="username"
                placeholder="email or username"
                // value= {this.state.username}
                onChange={handleOnChange}
              />
              {<p>{errorUserName}</p>}
            </div>
            <div className="formlg-inputs">
              <label className="formlg-label">Password</label>
              <input
                className="formlg-input"
                type="password"
                name="password"
                placeholder="enter your password"
                // value= {this.state.password}
                onChange={handleOnChange}
              />
              {<p>{errorPW}</p>}
            </div>
            <button className="formlg-input-btn" type="submit">
              Sign in
            </button>
            <span className="formlg-input-fgpw">Forgot Password?</span>
          </form>
        </div>
      </div>
    </div>
    </>);
    }
  
};