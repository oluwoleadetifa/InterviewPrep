import React from 'react'

const Task: React.FC = () => {
  return (
    <div className='text-2xl my-5 mx-auto w-[80%] bg-blue-300 p-5 border-none'>
      TypeScript & React Foundations
      <p>
        <ul>
          <li>
            <strong>Core Focus:</strong> Solidify the absolute essentials.
          </li>
          <li>
            <strong>Review:</strong><br />
            <ul>
              <li>
                <strong>TypeScript:</strong> This is not optional. Practice with types for props, state, and functions. Understand interface vs. type.
              </li>
              <li>
                <strong>React:</strong> Functional components, props, and JSX syntax.
              </li>
              <li>
                <strong>ES6+ JS:</strong> Arrow functions, destructuring, template literals, and array methods (map, filter, reduce).
              </li>
            </ul>
          </li>
          <li>
            <strong>Practice</strong>
            <ul>
              <li>Challenge 1: Build a counter with two buttons (Increment/Reset). Implement this using TypeScript from the start, typing your state and props.</li>
              <li>Challenge 2: A simple list of items (e.g., names). Render the list and add a button to reverse the order.</li>
            </ul>
          </li>
        </ul>
        
        
        
      </p>
    </div>
  )
}

export default Task