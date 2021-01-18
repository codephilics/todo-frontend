import {
  CREATE_TODO,
  ALL_TODOS,
  UPDATE_TODO,
  DELETE_TODO,
} from "./actionTypes";
import * as Api from "../Api";

export const allTodos = async (dispatch, data = []) => {
  const response = await Api.getTodos();
  const { status, todos } = response.data;
  if (status === 200) {
    dispatch({
      type: ALL_TODOS,
      payload: todos,
    });
  } else {
    dispatch({
      type: ALL_TODOS,
      payload: data,
    });
  }
};

export const createTodo = async (dispatch, data) => {
  const response = await Api.createTodo(data);
  const { status, todo } = response.data;
  if (status === 201)
    dispatch({
      type: CREATE_TODO,
      payload: todo,
    });
};

export const deleteTodo = async (dispatch, id) => {
  const { status } = await Api.deleteTodo(id);
  if (status === 204)
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
};

export const updateTodo = async (dispatch, data) => {
  const response = await Api.updateTodo(data._id, { complate: data.complate });
  const { status, todo } = response.data;
  if (status === 200)
    dispatch({
      type: UPDATE_TODO,
      payload: todo,
    });
};
