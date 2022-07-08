import { Todo } from "../models/Todo"
import "./styles.css"
import { TodoComponent } from "./TodoComponent"

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map(t => <TodoComponent key={t.id} todo={t} todos={todos} setTodos={setTodos} />)}

    </div>
  )
}
