import './App.css'
import Task from './Task'
import ToDo from './ToDo'

function App() {

  return (
    <div className='w-[100%] bg-blue-100 py-[3%] text-white text-3xl'>
      <h2 className='w-[50%] py-5 my-0 mx-auto'>Task For Day Two</h2>
      <Task />
      <h2 className='w-[50%] py-5 my-0 mx-auto'>
        To-DO List
      </h2> 
      <ToDo/>
    </div>
  )
}

export default App
