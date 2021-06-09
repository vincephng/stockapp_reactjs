import StockList from '../component/StockList.js'
import React,{useState,useRef} from 'react'
import StockInfo from '../component/SearchBar.js'
import '../style/home.css';
import linkedin from '../pics/icons8-linkedin-64.png'
import instagram from '../pics/icons8-instagram-64.png'
import facebook from '../pics/icons8-facebook-64.png'
import FormSignUP from '../component/FormSignUp.js';
import homeIcon from '../pics/icons8-home-48.png'
import { LoginForm } from '../component/Login.js';
import history from '../routes/history'




const Mainpage = () => {
  const [show,setShow] = useState(false)
  const [showMenu,setShowMenu] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)
  const node = useRef();
  // useEffect(() => {
  //   if (showMenu) {
  //     document.addEventListener('mousedown', handleClickOutside);
  //   } else {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   }
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [showMenu])
  // const handleClickOutside = (e) => {
  //   if (node && node.current && node.current.contains(e.target)) {
  //     // inside click
  //     return;
  //   }
  //   // outside click
  //   setShowMenu(false);
  // };
 
  const handleOpenmodalSignUp = (e) => {
    e.preventDefault()
    setShow(!show)
    setShowMenu(!showMenu)
    setShowSignIn(false)
  }
  const handleOpenmodalSignIn = (e) => {
    e.preventDefault()
    setShowSignIn(!showSignIn)
    setShowMenu(!showMenu)
    setShow(false)
  }

  const handleOpenmodalAccount = (event) => {
    event.preventDefault()
    history.push({pathname:'/user/home'})
    
  }
  
   return(
    <> 
    <div className='nav'>
            <a href="/coin/home">Crypto &#5171;&#5171;</a>
                   
    </div>      
    <div className="App">
        <div className="modal-div" >
            {/* <button className="signup-bnt" onClick={()=>setShow(true)}>Sign Up</button> */}
            <div className="icon-div" ref={node} onClick={()=>setShowMenu(!showMenu)}>
              <img className="home-icon" src={homeIcon} alt="home"></img>
            </div>
            {showMenu ?
            (<div className ="list-div">
              <ul>
                <li><button onClick={handleOpenmodalSignUp}>Sign Up</button></li>
                <li><button onClick={handleOpenmodalSignIn}>Sign In</button></li>
                <li><button onClick={handleOpenmodalAccount}>Account</button></li>
              </ul>
            </div>) : null }
            <FormSignUP onClose={()=>setShow(false)} show={show}/>
            <LoginForm onClose={()=>setShowSignIn(false)} show={showSignIn}/>
           
           
             
      </div>
       
      <div className="container">  
        <StockInfo/>    
        <table className="table">
         <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Last Closed</th>
            <th>Today</th>
            <th>% Changed</th>
            <th>MarketCap</th>
          </tr>   
          </thead>
          <tbody>
            <StockList ticker='aapl'/>
            <StockList ticker='tsla'/>
            <StockList ticker='lulu'/>
            <StockList ticker='msft'/>
            <StockList ticker='amc'/>
            <StockList ticker='luv'/>
            <StockList ticker='goog'/>
            <StockList ticker='nke'/>
            <StockList ticker='sne'/>
            <StockList ticker='amzn'/>         
          </tbody>      
        </table> 
      </div>   
      
    </div>
    <div className="footer-basic">
        <footer>
            <div className="social">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vincephng/"><i className="icon-social-instagram"><img src={linkedin} alt="Linke"/></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vincephng/"><i className="icon-social-linkedin"><img src={instagram} alt="Instagram"/></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100000149967795"><img src={facebook} alt="facebook"/><i className="ion-social-facebook" alt="Facebook"></i></a></div>
            <ul className="list-inline">
                <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href="http://www.vincephucnguyen.com">About Me</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p className="copyright">Made by PN © 2021</p>
        </footer>
    </div>          
    </>  ); 
 

}

export default Mainpage;