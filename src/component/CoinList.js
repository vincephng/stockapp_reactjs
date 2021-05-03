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
        const filteredCoins = coinName.filter(coin =>coin.name.toLowerCase().includes(searchInput.toLowerCase()));
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
                {filteredCoins.map(coin => {
                    return (
                        <CoinPage
                            key={coin.id}
                            name={coin.name}
                            price={coin.current_price}
                            symbol={coin.symbol}
                            marketcap={coin.total_volume}
                            volume={coin.market_cap}
                            image={coin.image}
                            priceChange={coin.price_change_percentage_24h}/>); })}
            </div>
            </div>
  );
        
        
        

    }


}

export default CoinList;