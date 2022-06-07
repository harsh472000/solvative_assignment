import React, { useState } from 'react'
import axios from 'axios'


function Searchbox() {
    const [input,setInput] = useState('');
    const [data,setData] = useState([]);

    const changeHandler = (e) =>{
        setInput(e.target.value);
    }

    const clickHadler = ()=>{
        var options = {
            method: 'GET',
            url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
            params: {countryIds: 'IN', namePrefix: 'del', limit: '5'},
            headers: {
              'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
              'x-rapidapi-key': '4ac5e3352fmshe6ac515ca3b8ccap1f0045jsnf0a504a87bbe'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              setData(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    }
  return (
    <div>
        <div className='search'>
            <input type='text' value={input} onChange={changeHandler}/>
            <button onClick={clickHadler}>Search</button>
        </div>
    </div>
  )
}

export default Searchbox