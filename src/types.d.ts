export interface Todo {
    id: string
    title: string
    completed: boolean
}

// export type TodoId = Omit<Todo, 'completed' | 'title'> Esto hace lo mismo del de abajo pero a la inversa, solo te quedas con el id y omites los otros 2.
export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Array<Todo>