export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const ADD_DRAG_TODO = "ADD_DRAG_TODO";
let nextTodoId = 1;

export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  };
}
export function editTodo(id, text) {
  return {
    type: EDIT_TODO,
    id,
    text
  };
}
export function addObjToTodo(data) {
  return {
    type: ADD_DRAG_TODO,
    data
  };
}
