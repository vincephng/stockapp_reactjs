import axios from 'axios'
import React, {useState,useEffect} from 'react'
import {iex} from '../config/iex'
import thunder from'../pics/thunder.png'

const News = (symbol) =>{
   const [dataNews,setDataNews] = useState([])
   const ticker = symbol.ticker

   useEffect(()=>{
    const thisUrl = iex.base_url+ ticker+iex.typeNews+iex.api_key_vinc3
    console.log(thisUrl)
    axios.get(thisUrl)
         .then((res) => filteredNews(res.data))
         .catch((err) => console.log(err))
    }, []);

    const filteredNews = (resNews) =>{
        const data = resNews

        for(let [key] of Object.entries(data)){
            const dataKey = data[key].news
            setDataNews(dataKey)
        } 
    }

    console.log(dataNews)
   
    return(<>{dataNews.map(obj =>{
                return(<div className='article' key={obj.headline}>
                       <div className="source-article"><img src={thunder}/>{obj.source}</div>
                            <div className='content'>
                                <div className='title-content'>
                                    <p>{obj.headline}</p>
                                    <p className='read-more'><a href={obj.url}>Read more &#8594;</a></p>
                                </div>
                                <div className='img-news'><img src={obj.image}/></div>
                            </div>
             
               </div>) 
        })}</>)

}

export default News;