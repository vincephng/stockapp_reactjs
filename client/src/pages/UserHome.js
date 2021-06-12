import React, { useEffect, useState } from "react";
import "../style/user_style/user_home.css";
import alien from "../pics/user_page/1183.jpg";
import history from "../routes/history";
import UserPageContent from "../component/UserPageContent";

const UserMainPage = () => {
  const [userData, setUserData] = useState({});

  const getUserInfo = async () => {
    const getUser = await JSON.parse(localStorage.getItem("UserData"));
    if (getUser) {
      setUserData(getUser.user);
    } else {
      console.log("Please log in");
      history.push("/");
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  console.log(userData);
  const handleLogOut = (logout) => {
    logout.preventDefault();
    localStorage.removeItem("UserData");
    history.push("/");
  };

  return (
    <div className="container-userhome">
      <div className="dashboard-userhome">
        <div className="user-profile">
          <img src={alien} alt="" />
          <div className="user-profile-title">
            <h3>{userData.username}</h3>
            <p>Member</p>
          </div>
        </div>
        <div className="user-profile-options">
          <div className="option">
            <img src="./images/twitch.png" alt="" />
            <h2>Profile</h2>
          </div>
          <div className="option-home">
            <img src="./images/steam.png" alt="" />
            <a href="/">
              <h2>Home</h2>
            </a>
          </div>
          <div className="option">
            <img src="./images/upcoming.png" alt="" />
            <h2>News</h2>
          </div>
          <div className="option-logout">
            <img src="./images/library.png" alt="" />
            <h2>
              <button onClick={handleLogOut}>Log Out</button>
            </h2>
          </div>
        </div>
        {/* <div className="thanks">
            <h2>Thank you for joining us</h2>
            <img src={thankPic} alt="" />
          </div> */}
      </div>
      <div className="content-page">
        <div className="status">
          <h1>Stock</h1>
          <input type="text" />
        </div>
        <div className="cards">
          <UserPageContent user={userData} />
        </div>
      </div>
    </div>
  );
};
export default UserMainPage;
