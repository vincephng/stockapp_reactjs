import React from 'react'
import '../style/coinpage.css'

const Coin = ({name,symbol,price,image,volume,priceChange,marketcap}) =>{
    // console.log(priceChange,name,symbol)
    return (<>
       <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin'>
                <img src={image} alt='crypto'/>
                    <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
        <div className='coin-data'>
        <p className='coin-price'>${price}</p>
        <p className='coin-volume'>{volume.toLocaleString()}</p>

                {priceChange < 0 ? (
                    <p className='coin-percent red'>&#9660;{priceChange.toFixed(2)}%</p>
                ) : (
                    <p className='coin-percent green'>&#9650;{priceChange}%</p>
                )}

      <p className='coin-marketcap'> Mkt Cap: ${marketcap.toLocaleString()}</p>
            </div>
        </div>
        </div>
       
        </>);

}

export default Coin;