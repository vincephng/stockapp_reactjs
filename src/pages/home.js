import StockList from '../component/StockList.js'
import React from 'react'
import StockInfo from '../component/SearchBar.js'
import '../style/home.css';

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
    </>  ); 
 

}

export default Mainpage;