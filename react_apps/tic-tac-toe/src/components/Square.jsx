import React from 'react'



const Square = ({value, handleClick}) => {
  /* so react hooks cannot be called outside a function
  and it is advisable it is called in the function you need it for*/
  return (
    <button className="square" onClick={handleClick} value={value}>{value}</button>
  )
}

export default Square