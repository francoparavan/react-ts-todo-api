import { type ListOfTodos } from "../types"
import { Todo } from "./Todo"


interface Props {
    todos: ListOfTodos
}

const Todos: React.FC<Props> = ({ todos }) => {
    return (
        <ul className="todo-list">
            {todos.map(elem => (
                <li
                    key={elem.id} className={`${elem.completed ? 'completed' : ''}`}>
                    <Todo
                        key={elem.id}
                        id={elem.id}
                        title={elem.title}
                        completed={elem.completed}
                    />
                </li>
            ))}
        </ul>
    )
}

export default Todos
