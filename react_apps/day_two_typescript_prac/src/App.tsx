import './App.css'
import Counter from './Counter'
import Learning from './Learning'
import ListOfItems from './ListOfItems'
import Task from './Task'

function App() {

  return (
    <div className='w-[100%] bg-orange-700 py-[3%] text-white text-3xl'>
      <h2 className='w-[50%] py-5 my-0 mx-auto'>Task For Day One</h2>
      <Task />
      <h2 className='w-[50%] py-5 my-0 mx-auto'>
        Why We Learn TypeScript
      </h2> 
      <Learning />
      <h2 className='w-[50%] py-5 my-0 mx-auto'>
        Practice 1
      </h2> 
      <Counter />
      <h2 className='w-[50%] py-5 my-0 mx-auto'>
        Practice 2
      </h2> 
      <ListOfItems/>
    </div>
  )
}

export default App
