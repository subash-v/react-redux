import {
  ADD_DONE_TODO,
  DELETE_DONE_TODO,
  EDIT_DONE_TODO
} from "../action/doneTodo.action";

function donetodo(state = [], action) {
  switch (action.type) {
    case ADD_DONE_TODO:
      let existingState = state;
      let newState = [];
      newState.push(...existingState);
      newState.push({ id: action.id, text: action.text });
      return newState;

    case DELETE_DONE_TODO:
      const deletestate = state.filter(data => {
        return data.id !== action.id;
      });

      return deletestate;
    case EDIT_DONE_TODO:
      const editstate = state.map(data => {
        if (data.id == action.id) {
          data.text = action.text;
        }
        return data;
      });
      return editstate;
    default:
      return state;
  }
}

export default donetodo;
