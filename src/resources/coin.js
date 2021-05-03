import {coinApi} from '../config/coingecko'
import axios from 'axios'

 const coin = {
    callApi: (callback) => {
        axios.get(coinApi.marketCoin)
         .then((res) => { callback(res.data)})
         .catch((err) => {callback(err)})
    
    },

    // filteredData: (response) =>{
    //     const coins = response
    //     // console.log(coins)
    //     let filteredData ={}
        
    //     for (let i = 0; i< coins.length;i++){
    //         filteredData = { name= [coins[i].name]}
    //     }
    //     console.log(filteredData)
    //     return filteredData
        
    // }
}

export default coin;
