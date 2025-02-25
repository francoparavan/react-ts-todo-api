import { useState } from 'react'
import Todos from './components/Todos'
import { FilterValue, TodoId, TodoTitle, type Todo as TodoType } from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount


  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }
    setTodos([...todos, newTodo]) 
  }
  
  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo}/>
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
