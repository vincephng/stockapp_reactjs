import StockList from '../component/StockList.js'
import React from 'react'
import StockInfo from '../component/SearchBar.js'
import '../style/home.css';
import linkedin from '../pics/icons8-linkedin-64.png'
import instagram from '../pics/icons8-instagram-64.png'
import facebook from '../pics/icons8-facebook-64.png'
const Mainpage = () => {
   return(
    <> 
    <div className='nav'>
            <a href="/coin/home">Crypto &#5171;&#5171;</a>
    </div>      
    <div className="App">
        <StockInfo/>
      <div className="container">      
        <table className="table">
         <thead className="table-light">
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
              <a target="_blank" href="https://www.linkedin.com/in/vincephng/"><i className="icon-social-instagram"><img src={linkedin}/></i></a>
              <a target="_blank" href="https://www.instagram.com/vincephng/"><i className="icon-social-linkedin"><img src={instagram}/></i></a>
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100000149967795"><img src={facebook}/><i className="ion-social-facebook"></i></a></div>
            <ul className="list-inline">
                <li className="list-inline-item"><a target="_blank" href="http://www.vincephucnguyen.com">About Me</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p className="copyright">Made by PN © 2021</p>
        </footer>
    </div>          
    </>  ); 
 

}

export default Mainpage;