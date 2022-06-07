import React, { useState } from 'react'
import axios from 'axios'
import ShowData from './ShowData';
import '../App.css'

function Searchbox() {
    const [input,setInput] = useState("");
    const [limit,setLimit] = useState("");
    const [data,setData] = useState([]);

    const changeHandler = (e) =>{
        setInput(e.target.value);
    }
    const changelimitHandler = (e) =>{
        setLimit(e.target.value);
    }
    
    const clickHadler = (e)=>{
        e.preventDefault();
        var options = {
            method: 'GET',
            url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
            params: {countryIds: 'IN', namePrefix: input, limit: limit},
            headers: {
              'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
              'x-rapidapi-key': '4ac5e3352fmshe6ac515ca3b8ccap1f0045jsnf0a504a87bbe'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data.data);
              setData(response.data.data);
          }).catch(function (error) {
              console.error(error);
          });
    }
  return (
    <div>
        <div className='search'>
            <input type='text' value={input} onChange={changeHandler} placeholder='Enter city name'/>
        
            <input type='text' value={limit} onChange={changelimitHandler} placeholder='how many data you want to show'/>
            <button onClick={clickHadler} className='btn'>Search</button>
        </div>
        <div className='container'>
        {/* <h1>{props.list.city}</h1> */}
        <table>
            <thead>
                <tr>
                    <th>index</th>
                    <th>place Name</th>
                    <th>County flag</th>
                </tr>
            </thead>
                
                { 
                    data.map((value,index)=>{
                        if(value.length>0){  
                            return(
                                <h1>No data found</h1>
                            )   
                        }else{
                            return(
                                <ShowData 
                                key={index}
                                id={index}
                                list={value}/>
                            ) 
                        }
                        
                    })
                }
            
        </table>
    </div>
        
    </div>
  )
}

export default Searchbox