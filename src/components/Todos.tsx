import { type Todo as TodoType ,type TodoId, type ListOfTodos } from "../types"
import { Todo } from "./Todo"


interface Props {
    todos: ListOfTodos
    onRemoveTodo: ({ id }: TodoId) => void
    onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => {
    return (
        <ul className="todo-list">
            {todos.map(elem => (
                <li
                    key={elem.id} className={elem.completed ? 'completed' : ''}>
                    <Todo
                        key={elem.id}
                        id={elem.id}
                        title={elem.title}
                        completed={elem.completed}
                        onToggleCompleteTodo={onToggleCompleteTodo}
                        onRemoveTodo={onRemoveTodo}
                    />
                </li>
            ))}
        </ul>
    )
}

export default Todos
