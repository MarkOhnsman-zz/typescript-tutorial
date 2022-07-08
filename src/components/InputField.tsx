import React, { useRef } from 'react';
import './styles.css';

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void;
}

export const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const input = useRef<HTMLInputElement>(null)

  return (
    <form className="input" onSubmit={(e) => {
      handleAdd(e)
      input.current?.blur()
    }}>
      <input ref={input} type="input" placeholder="Enter a Task" className="input-box"
        value={todo}
        onChange={
          (e) => setTodo(e.target.value)
        }
      />
      <button className="input-submit" type="button">Go</button>
    </form>
  )
}
