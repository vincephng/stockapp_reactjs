import {iex} from '../config/iex.js'
import axios from 'axios'


export const stock =  {
   
    callApi: (ticker, callback) => { 
    axios.get(stock.lastestURL(ticker),{timeout:3000})
         .then((res) => { callback(stock.formattedData(res.data))})
         .catch((err) => {callback(stock.handlingError(err))})
    
    },



lastestURL:(ticker) =>{
    const thisUrl = iex.base_url + ticker + iex.typeQuote + iex.api_key_vinc3
    return thisUrl
},

formattedData: (data) =>{
    const stockData = data
    // console.log(stockData)
    let shortData = {}
    
    for(let [key] of Object.entries(stockData)){
        const stockx = stockData[key];
        shortData = {
        symbol: stockx.quote.symbol,
        nameCompany: stockx.quote.companyName,
        latestPrice: '$'+ (stockx.quote.latestPrice).toFixed(2),
        previousClose:stockx.quote.previousClose,
        percentChange:parseFloat(stockx.quote.changePercent).toFixed(3),
        marketCap:formattNum.nFormatter(stockx.quote.marketCap),
        wksHigh:stockx.quote.week52High,
        wksLow:stockx.quote.week52Low,
        highPrice: stockx.quote.high,
        ytdChange: stockx.quote.ytdChange,
        avgVolume: stockx.quote.avgTotalVolume.toLocaleString()
        };
        
    return shortData
       }
 },
 handlingError: (error)=>{
     const errorData= error.response
     const errorObj = {status: errorData.status,
                       errData: errorData.data,
                       reason: errorData.statusText}
     return errorObj
 }
}

const formattNum = {
    nFormatter: (number) =>{
        var si = [
            { value: 1, symbol: "" },
            { value: 1E3, symbol: "k" },
            { value: 1E6, symbol: "M" },
            { value: 1E9, symbol: "B" },
            { value: 1E12, symbol: "T" },
            { value: 1E15, symbol: "P" },
            { value: 1E18, symbol: "E" }
          ];
          var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
          var i;
          for (i = si.length - 1; i > 0; i--) {
            if (number >= si[i].value) {
              break;
            }
          }
          return (number / si[i].value).toFixed(0).replace(rx, "$1") + si[i].symbol;
    },
}