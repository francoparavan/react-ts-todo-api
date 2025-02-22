import { useState } from 'react'
import Todos from './components/Todos'

const mockTodos = [
  {
    id: '1',
    title: 'Hacer las compras',
    completed: true
  },
  {
    id: '2',
    title: 'Preparar comida',
    completed: false
  },
  {
    id: '3',
    title: 'Lavar platos',
    completed: false
  }  
]

const App = () => {
  
const [todos, setTodos] = useState(mockTodos)

  return (
    <div className='todoapp'>
    <Todos todos={todos} />
    </div>
  )
}

export default App
