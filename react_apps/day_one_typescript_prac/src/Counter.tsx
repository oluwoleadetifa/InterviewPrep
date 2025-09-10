import React, { useState } from 'react';

import './Counter.css';

const Counter: React.FC = () => {
  const [digit, setDigit] = useState<number>(0);
  const handleIncrement = () => {
    setDigit(digit => digit + 1);
  }
  const handleReset = () => {
    setDigit(0)
  }
  return (
    <div className='flex w-[80%] bg-amber-200 text-2xl text-blue-300 p-5 justify-evenly my-5 mx-auto rounded-4xl'>
      <div className='w-[33%]'>
        <button onClick={handleReset} className='bg-blue-600 btn'>
          Reset
        </button>
        </div>
      <div className='w-[33%] text-5xl text-center'>{digit}</div>
      <div className='w-[33%]'>
        <button onClick={handleIncrement} id='increase-btn' className='bg-green-600 btn'>
          +
        </button>
      </div>
    </div> 
  )
}

export default Counter