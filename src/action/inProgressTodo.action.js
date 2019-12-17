export const ADD_IN_TODO = "ADD_IN_TODO";
export const DELETE_IN_TODO = "DELETE_IN_TODO";
export const EDIT_IN_TODO = "EDIT_IN_TODO";
let nextTodoId = 1;

export function addInProgressTodo(text) {
  return {
    type: ADD_IN_TODO,
    id: nextTodoId++,
    text
  };
}

export function deleteInProgressTodo(id) {
  return {
    type: DELETE_IN_TODO,
    id
  };
}
export function editInProgressTodo(id, text) {
  return {
    type: EDIT_IN_TODO,
    id,
    text
  };
}
