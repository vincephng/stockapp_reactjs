import React from 'react'
import '../style/user_style/add-bnt.css'
import axios from 'axios'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
const AddStock = (props) => {
   const ticker ={ticker: props.symbol} 
   
   
   const handleOnClick = (click) => {
     click.preventDefault()
     axios.defaults.withCredentials = true;
     axios.post('http://localhost:3001/stock/app/stockAdd',ticker)
          .then(res => {
              toast.success('Successfully Added')
              console.log(res)
       })
          .catch(err => console.log(err))
     
   }
   return(
    //    <div className="add-section">
           <button className="add-btn" onClick={handleOnClick}> &#43; Add</button>
    //    </div>
   )


}

export default AddStock