// import axios from 'axios';
// import React, {useState,useEffect} from 'react';
// import fileDownload from 'js-file-download'
// // import {Blob} from 'react-blob'
// import searchName from '../file/searchName.json'
// import Fuse from 'fuse.js'
// import history from '../routes/history'


// const NameProgess = ()=>{
//     const[nameAll,setNameAll] = useState(searchName)
//     const[result, setResult]= useState([])
//     const[stock,setStock] = useState([])
    
//     // useEffect(() =>{
//     //   axios({url:'https://cloud.iexapis.com/beta/ref-data/symbols?token=pk_129d5e2e0c71470eaed4946148462552',METHOD: 'GET'})
//     //        .then((res)=> nameFilter(res.data))

//     // },[])

//     // const nameFilter = (name) =>{
//     //    const data = name
//     //    let allSymbol = []
//     //    let allName  = []
//     //    let one= {}
//     //    let all = []
//     //    for (let i = 0;i<data.length;i++){
//     //        allName.push(data[i].name)
//     //        allSymbol.push(data[i].symbol)
//     //     }
//     //    for (let i =0; i< allName.length;i++){
//     //        const key = allName[i]
//     //        one['name'] = key
//     //        const value = allSymbol[i]
//     //        one['symbol'] = value
//     //        all.push(one)
//     //        one = {}
//     //    }
//     //    console.log(allSymbol, allName)
//     //    console.log(all)
//     //    setNameAll(all)
//     //    setStock(stock)
//     //    saveData()
//     // }
//     const onChange = (e) =>{
//         const input = e.target.value
//         // if (!e) {
//         //     setNameAll(searchName);
//         //     return
//         //   }else{
//         const filteredname = searchName.filter(id =>id.name.toLowerCase().includes(input.toLowerCase()) || id.symbol.toLowerCase().includes(input.toLowerCase()));
//         //   }
//         setResult(filteredname)
        
//        } 
//        console.log(result,"this result")
   
//     const onClick = click =>{
//         click.preventDefault()
//         console.log("clicked")     
//         search(result)
//     }
//     // const saveData= () =>{
//     //     const string = JSON.stringify(nameAll)
//     //     const blob = new Blob([string],{type:'application/json'})
//     //     console.log(blob)
//     //     // const file = fileDownload(blob, 'all.json')
//     //     // localStorage.clear();
        
//     // }
//     // const getData= () =>{
//     //   let get = localStorage.getItem('myData')
//     //   get= JSON.parse(get)
//     //   console.log(get, 'From Get')
//     // }
//     // const filterName = nameAll.filter(find => find.name.toLowerCase().includes(input.toLowerCase()))
    
//     const search = (array) => {
//         if(array.length == 0){
//             console.log('name is not found')
//         }else if(array.length >0){
//             const symbol = array[0].symbol
//             console.log('Has result')
//             history.push({pathname: `/stock/${symbol}`})
//         }
        
//         // const presentSearch= filteredname.map(result =>{console.log(result)});
       
        
//         // const data = [
//         //     {
//         //       "title": "Old Man's War",
//         //       "author": "John Scalzi",
//         //       "tags": ["fiction"]
//         //     },
//         //     {
//         //       "title": "The Lock Artist",
//         //       "author": "Steve",
//         //       "tags": ["thriller"]
//         //     }
//         //   ]
          
//         // const options={
//         //     includeScore: true,
//         //     // Search in `author` and in `tags` array
//         //     keys: ['author', 'tags']
//         //   }
//         // const fuse = new Fuse(data,options)
//         // const result = fuse.search('ock')
//         // console.log(fuse,result)
        
//         // const match = []
//         // if(!result.length){
//         //     setNameAll([])
//         // }else {
//         //     result.forEach((item) => {
//         //       match.push(item);
//         //     });
//         //     setNameAll(match);
//         //   }

//     }
//     return(<>
//         <div className='stock-search'>
//         <h1 className='stock-text' ><a href="" onClick= {onClick}>
//             Search</a></h1>
//         <form >
//         <input
//             className='stock-input'
//             type='text'
//             onChange= {onChange}
//             placeholder='Symbol stock only'
//         /><br/>
//         </form>

//         {/* <button onClick={saveData}><a>Save</a></button>
//         <button onClick={getData}>Get</button> */}
        
//         </div>
        
//     {/* {nameAll.map(obj =>{
//           return( 
//              <div className='container'>
//                     <div className="source-article">{obj.name}/{obj.symbol} </div>
//                 </div>) 

//     })} */}
//     </> )
// }

// export default NameProgess;