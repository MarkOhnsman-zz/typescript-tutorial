import { useEffect, useRef, useState } from 'react'
import { AiFillDelete, AiFillEdit, AiFillSave } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { Todo } from "../models/Todo"

interface Props {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


export const TodoComponent: React.FC<Props> = ({ todo, todos, setTodos }) => {

  // REVIEW I hate this.....
  const handleDone = (id: Number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, isDone: !t.isDone } : t))
  }

  const deleteTodo = (id: Number) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  const [edit, setEdit] = useState<boolean>(false)
  const [editable, setEditable] = useState<string>(todo.todo)

  const editTodo = (event: React.FormEvent) => {
    event.preventDefault()
    setTodos(todos.map(t => t.id === todo.id ? { ...t, todo: editable } : t))
    setEdit(false)
  }
  const inputField = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputField.current?.focus()
  }, [edit])


  return (
    <form className="single-todo no-select">
      {edit ?
        (
          <input
            ref={inputField}
            className="single-todo-text"
            type="text"
            value={editable}
            onChange={(e) => setEditable(e.target.value)}
          ></input>
        )
        : todo.isDone ? (
          <s className="single-todo-text">{todo.todo}</s>
        ) : (
          <span className="single-todo-text">{todo.todo}</span>
        )
      }
      <div>
        {edit ? (
          <span className="icon" onClick={editTodo}>
            <AiFillSave />
          </span>

        ) : (
          <span className="icon" onClick={() => setEdit(true)}>
            <AiFillEdit />
          </span>

        )}
        <span className="icon" onClick={() => deleteTodo(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  )
}
