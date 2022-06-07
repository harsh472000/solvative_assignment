import axios from 'axios'
import React, { useState } from 'react'

function ShowData(props) {
   
  return (
    <>
        <tbody>
        <tr>
            <td>{props.id+1}</td>
            <td>{props.list.city}</td>
            <td><img src={`https://countryflagsapi.com/png/${props.list.countryCode}`} width='100px' height='60px'/></td>
        </tr>
        </tbody>
        
        
    </>
  )
}

export default ShowData