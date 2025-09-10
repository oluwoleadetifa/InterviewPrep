import React from 'react'

const Task: React.FC = () => {
  return (
    <div className='text-2xl my-5 mx-auto w-[80%] bg-blue-300 p-5 border-none'>
      State Management & Events
      <p>
        <ul>
          <li>
            <strong>Core Focus:</strong> Mastering state flow and user interactions.
          </li>
          <li>
            <strong>Review:</strong><br />
            <ul>
              <li>
                useState with functional updates (setCount(prevCount ={'>'} prevCount + 1)).

              </li>
              <li>
                Controlled components (forms) for {'<input>, <textarea>, <select>.'}
              </li>
              <li>
                Event handling (onChange, onClick, onSubmit).
              </li>
              <li>
                <strong>Pro Tip:</strong> Be ready to talk about the difference between controlled and uncontrolled components.
              </li>
            </ul>
          </li>
          <li>
            <strong>Practice</strong>
            <ul>
              <li>Challenge 3: Build a Todo app.
                <li>Add new todos.</li>
                <li>Mark them as complete (toggle the complete status).</li>
                <li>Delete todos.</li>
                <li>Augment: Use TypeScript to define a Todo interface (e.g., {'{id: string; text: string; completed: boolean;}'})</li>
              </li>
            </ul>
          </li>
        </ul>
        
        
        
      </p>
    </div>
  )
}

export default Task