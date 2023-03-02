export interface Todo {
  id: string
  title: string
  completed: boolean
}

// Permite extraer el tipo de dato de la variable a ocupar export type TodoTitle = Pick<interfaceName, 'nameOfProperty'
export type TodoId = Pick<Todo, 'id'>
export type TodoCompleted = Pick<Todo, 'id' | 'completed'>
export type TodoTitle = Pick<Todo, 'title'>

// Permite omitir el tipo de datos de la variables a ocupar export type TodoTitle = Omit<interfaceName, 'nameOfPropertyToExclude' | 'nameOfPropertyToExclude'>

export type ListOfTodos = Todo

// Devuelve los valores de las variables en un objeto
export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
