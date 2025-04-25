import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {

  return (
    <>
     <div>
      <h1 className='text-2xl font-bold'>ReduxToolKit Todo</h1>
      <AddTodo/>
      <Todo/>
     </div>
    </>
  )
}

export default App
