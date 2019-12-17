import {
  ADD_IN_TODO,
  DELETE_IN_TODO,
  EDIT_IN_TODO
} from "../action/inProgressTodo.action";

function inprogresstodo(state = [], action) {
  switch (action.type) {
    case ADD_IN_TODO:
      let existingState = state;
      let newState = [];
      newState.push(...existingState);
      newState.push(action.data);
      return newState;

    case DELETE_IN_TODO:
      const deletestate = state.filter(data => {
        return data.id !== action.id;
      });

      return deletestate;
    case EDIT_IN_TODO:
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

export default inprogresstodo;
