export const ADD_DONE_TODO = "ADD_DONE_TODO";
export const DELETE_DONE_TODO = "DELETE_DONE_TODO";
export const EDIT_DONE_TODO = "EDIT_DONE_TODO";

export function addDoneTodo(data) {
  return {
    type: ADD_DONE_TODO,
    data
  };
}

export function deleteDoneTodo(id) {
  return {
    type: DELETE_DONE_TODO,
    id
  };
}
export function editDoneTodo(id, text) {
  return {
    type: EDIT_DONE_TODO,
    id,
    text
  };
}
