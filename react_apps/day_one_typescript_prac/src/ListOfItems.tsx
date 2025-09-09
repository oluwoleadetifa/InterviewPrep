import React, { useState } from 'react'

const ListOfItems: React.FC = () => {
  const [items, setItems] = useState<Array<string>>(['Hello', 'My', 'Name', 'Is', 'Wole'])
  
  const reverseList = () => {
    setItems([...items].reverse())
  }
  return (
    <div className='w-[80%] my-0 mx-auto'>
      <div className='flex w-[100%] justify-evenly bg-amber-950 py-6'>
        {items.map((value, key) => <div key={key} className={`w-[${100/items.length}%] `}>{value}</div>)}
      </div>
      <button className='bg-green-600 w-[25%] p-5 rounded-4xl my-3 mx-auto block' onClick={reverseList}>Reverse</button>
    </div>
  )
}

export default ListOfItems