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
        if(limit<3 || limit>10)
        {
            alert('Please enter value between 3 and 10');
        }
        var options = {
            method: 'GET',
            url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
            params: {countryIds: '', namePrefix: input, limit: limit},
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
        
            <input type='number' value={limit} onChange={changelimitHandler} placeholder='Enter Number'/>
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
                    data.length > 0 ? 
                        data.map((value,index)=>{
                                return(
                                    <ShowData 
                                    key={index}
                                    id={index}
                                    list={value}/>
                                )                
                        })
                     : <h1 className='err'>No data found</h1>
                }
                
            
        </table>
    </div>
        
    </div>
  )
}

export default Searchbox