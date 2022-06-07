import React from 'react'

function ShowData(props) {
  return (
    <>
        <tbody>
        <tr>
            <td>{props.id+1}</td>
            <td>{props.list.city}</td>
            <td>{props.list.country}</td>
        </tr>
        </tbody>
        
        
    </>
  )
}

export default ShowData