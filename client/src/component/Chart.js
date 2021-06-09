import {Line} from 'react-chartjs-2'
import React,{useState, useEffect} from 'react'
import {iex} from '../config/iex'
import axios from 'axios'


const Chart = (key) =>{
    const [dataChart, setDataChart] = useState([])
    useEffect (() => {
        const thisUrl = iex.base_url+ key.symbol + iex.typeChart+ iex.api_key_vinc3
        axios
          .get(thisUrl)
          .then(res => {filteredData(res.data);})
          .catch(error => console.log(error));
      }, []);
    //   console.log(dataChart);
   const filteredData = (res)=>{
        const stockData = res
        // console.log(stockData)
        let labelData = []
        let priceData = []
        let chartData = {}
    
        for(let [key] of Object.entries(stockData)){
            const stockK = stockData[key].chart;
            console.log(stockK)
            stockK.forEach(element => {
                labelData.push(element.label)
                priceData.push(element.close)
            });
            chartData = {label: labelData, price: priceData}
        }
        // console.log(labelData,priceData)
        setDataChart(chartData)
   }
   
   const data =({
       labels: dataChart.label,
       datasets:[{
           label: 'Price',
           data: dataChart.price,
           backgroundColor: '"#3e95cd"',
           borderColor: '#8e5ea2',
           pointBackgroundColor: '#fff',
           
        }],
   })

   const options = ({
        legend: {display: false,
                labels: {font: { size: 30}}},
        title: {
            display: true,
            text: ''
        },
        tooltips: {
            enabled: false
        },
        reponsive: true,
        scale: {
            scaleLabel:{
                fontColor: '#8e5ea2'
            }
        },
    })

   return(
       <div className="chart">
           <Line
              data = {data}
              options={options}/>
       </div>
   )
}

export default Chart;