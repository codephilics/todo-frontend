import { useReducer, createContext } from "react";
import reducer from "./reducers";

export const TodoContext = createContext();

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={[state, dispatch]}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
