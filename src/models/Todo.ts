import { useReducer } from "react";

export interface Todo {
  id: number;
  todo: string
  isDone: boolean
}



type Actions =
  | { type: 'add', payload: string }
  | { type: 'remove', payload: number }
  | { type: 'done'; payload: number }

const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), todo: action.payload, isDone: false }];
    case 'remove':
      return state.filter(t => t.id !== action.payload)
    case 'done':
      return state.map(t => t.id == action.payload ? { ...t, isDone: !t.isDone } : t)
  }

}

const ReducerExample = () => {
  const [state, dispatch] = useReducer(TodoReducer, [])
  return ()
}
