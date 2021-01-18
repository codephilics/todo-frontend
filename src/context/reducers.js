import {
  CREATE_TODO,
  DELETE_TODO,
  ALL_TODOS,
  UPDATE_TODO,
} from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case ALL_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case CREATE_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };
    case UPDATE_TODO:
      const index = state.todos.findIndex(
        (todo) => todo._id === action.payload._id
      );
      return {
        ...state,
        ...(state.todos[index] = action.payload),
      };
    default:
      throw new Error();
  }
};

export default reducer;
