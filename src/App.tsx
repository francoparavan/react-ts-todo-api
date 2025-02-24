import { useState } from 'react'
import Todos from './components/Todos'
import { TodoId, type Todo as TodoType } from './types'

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

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {

    const newTodos = todos.map(elem => {
      if (elem.id === id) {
        return {
          ...elem,
          completed
        }
      }
      return elem
    })
    setTodos(newTodos)
  }



  return (
    <div className='todoapp'>
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={todos}
      />
    </div>
  )
}

export default App
