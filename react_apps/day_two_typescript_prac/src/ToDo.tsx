import React, { useState } from 'react'
import { Icon } from '@iconify/react';

type ToDoProps = {
  id: number,
  text: string,
  completed: boolean
}

const ToDo: React.FC = () => {

  // I want to store all my data and how they are rendered will depend on if they are completed or not
  const [data, setData] = useState<ToDoProps[]>([
    { id: 1, text: 'read a book', completed: true },
    { id: 2, text: 'Play Pro Clubs', completed: false }
  ]);
  const [newData, setNewData] = useState('')
  
  const addItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData((prev) => [...prev,
    { id: Date.now(), text: newData, completed: false }
    ]);
    setNewData(''); //clear input
  }

  const deleteItem = (id: number) => {
    setData((prev)=> prev.filter((item)=>item.id !== id))
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewData(e.target.value)
  }

  const toggleComplete = (id: number) => {
    
    // Es6 unpacking where the data is mapped and the id is checked against my target id
    setData((prev) => prev.map((item) => item.id === id ? { ...item, completed: !item.completed } : item))
  }

  return (
    <div>
      <form onSubmit={addItem} className='flex flex-col w-[60%] justify-evenly items-center my-0 mx-auto'>
        <input value={newData} placeholder='Enter your new item to add,' className='border block my-3 w-[100%] p-2' onChange={(e)=>handleChange(e)}/>
        <button className='bg-green-400 w-[200px] p-5 rounded-3xl' type='submit'>Add</button>
      </form>

      <table className='w-[80%] my-5 mx-auto border bg-black text-center'>
        <thead className='border'>
          <tr>
            <th className='border'>Id</th>
            <th className='border'>Task</th>
            <th className='border'>Completed</th>
          </tr>
        </thead>
        <tbody>

        {data.map((value) => (<tr key={value.id} className='border'>
          <td className='border'>{value.id}</td>
          <td className='border'>{value.text}</td>
          {value.completed ?
            <td className='bg-green-400'>
              {'yes'}
            </td> :
            <td className='bg-red-400'>
              no
            </td>}
          <td className='flex justify-evenly items-center'>
            <input type='checkbox'
              checked={value.completed}
              onChange={() => toggleComplete(value.id)}
              className='w-8 h-8 cursor-pointer'
            />
            <Icon icon='fluent:delete-32-light' className='cursor-pointer hover:bg-red-400' onClick={()=>deleteItem(value.id)}/>
          </td>
        </tr>))}
        </tbody>
      </table>
    </div>
  )
}

export default ToDo