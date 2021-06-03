import axios from 'axios'
import React, {useState,useEffect} from 'react'
import {iex} from '../config/iex'


const UserPageContent = () =>{
  const [content, setContent] = useState([])
  useEffect(async() => {
    axios.defaults.withCredentials = true;
    await axios
      .get("http://localhost:3001/app/user/data")
      .then((res) => {
        const arr =res.data.user.symbolStock
        if (arr.length !== 0){
          getStockContent(res)
        }else{
          return
        }
      })
      .catch((err) => console.log(err)); 
    
  }, [])
  const getStockContent = async(arr) =>{
    const array = arr.data.user.symbolStock 
    let tickers = ''
    for(let ticker of array ){
      tickers += ticker.trim() + ',';
    }
    const Url = iex.base_url + tickers + iex.typeQuote + iex.api_key_vinc3
    axios.defaults.withCredentials = false;
    await axios.get(Url)
                .then(res => putObjToArr(res.data))
                .catch(err => console.log(err))  
  }
  const putObjToArr = (obj)=>{
    let arr = []
    console.log(obj)
    for(let [key] of Object.entries(obj)){
      arr.push(obj[key])
    }
    setContent(arr)
  }
  const handleRemoveTicker = async(remove) =>{
    const ticker = {ticker:remove.target.value}
    axios.defaults.withCredentials = true;
    await axios.post("http://localhost:3001/stock/app/removeTicker",ticker)
         .then(res =>console.log(res))
         .catch(err => console.log(err))
    window.location.reload()
  }
  if(content.length !== 0){
    return(<>{
          content.map(obj =>{
            const percentChange = obj.quote.changePercent.toFixed(3)
            return( <div className="card" key={obj.quote.symbol}>
              <img src="./images/assassins.png" alt="" />
              <div className="card-info">
                <button value={obj.quote.symbol} onClick={handleRemoveTicker}>Remove</button>
                <h2>{obj.quote.symbol} ({obj.quote.changePercent<0?(<p className="percent-down">&#9660; {percentChange} %</p>) :
                (<p className="percent-up"> &#9650; {percentChange} %</p>)})</h2> 
                <p>{obj.quote.companyName}</p>
                {/* <div className="progress"></div> */}
              </div>
              <h2 className="price">${obj.quote.latestPrice}</h2>
              
            </div>) 
        }) 
      }</>) }else{
            return(<div className="no-content"><h3>Nothing to show. Please use search bar to add your stock</h3></div>)
        }
}

export default UserPageContent;