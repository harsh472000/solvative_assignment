import React, { useState } from 'react'

function Searchbox() {
    const [input,setInput] = useState('dd');

    const changeHandler = (e) =>{
        setInput(e.target.value);
    }
  return (
    <div>
        <div className='search'>
            <input type='text' value={input} onChange={changeHandler}/>
            <button>Search</button>
        </div>
    </div>
  )
}

export default Searchbox