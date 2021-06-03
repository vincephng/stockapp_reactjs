import React, { Component} from 'react';
import { stock } from '../resources/stock.js';
import '../style/stockList.css'



class StockList extends Component{
constructor(props){
    super(props)
    this.state = {data: {}}
}
applyData = (data) =>{
    this.setState({data:data})
}

componentDidMount(){
stock.callApi(this.props.ticker, this.applyData)
// const local = localData()
}

render (){
    return (
       <tr>  
            <td>{this.state.data.nameCompany}</td>
            <td>{this.state.data.symbol}</td>
            <td>{this.state.data.previousClose}</td>
            <td>{this.state.data.latestPrice}</td>          
            <td>{this.state.data.percentChange<0?(<p className="percent-red">&#9660; {this.state.data.percentChange} %</p>) :
                (<p className="percent-green"> &#9650; {this.state.data.percentChange} %</p>)}</td>
            <td>{this.state.data.marketCap}</td>  
       </tr>

    )
}
}

export default StockList;