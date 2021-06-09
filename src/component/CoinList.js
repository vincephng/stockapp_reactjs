import React,{Component} from 'react'
import coin from '../resources/coin'
import '../style/coinlist.css'
import CoinPage from '../pages/CoinPage'



class CoinList extends Component{

    constructor(props){
        super(props)
        this.state={
            search: "",
            coinData: [],
        }
    }

    takeData = (response) =>{
        console.log(response)
        this.setState({coinData: response})
    }
    handleChange = e => {
        this.setState({search: e.target.value});
    }

    componentDidMount(){
      coin.callApi(this.takeData)
    }
    

    
    render(){
        const coinName = this.state.coinData
        const searchInput = this.state.search
        const filteredCoins = coinName.filter(coinF =>coinF.name.toLowerCase().includes(searchInput.toLowerCase()));
        return(
            <div className='back-bnt'><a href="/"> &#5176;&#5176; Stock</a>
            <div className='coin-app'>
            
            <div className='coin-search'>
                <h1 className='coin-text'>Search a currency</h1>
                <form>
                <input
                    className='coin-input'
                    type='text'
                    onChange={this.handleChange}
                    placeholder='Search'
                />
                </form>
            </div>
                {filteredCoins.map(coinM => {
                    return (
                        <CoinPage
                            key={coinM.id}
                            name={coinM.name}
                            price={coinM.current_price}
                            symbol={coinM.symbol}
                            marketcap={coinM.total_volume}
                            volume={coinM.market_cap}
                            image={coinM.image}
                            priceChange={coinM.price_change_percentage_24h}/>); })}
            </div>
            </div>
  );
        
        
        

    }


}

export default CoinList;