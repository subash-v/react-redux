import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  ADD_DRAG_TODO
} from "../action/todo.action";

function todo(state = [], action) {
  switch (action.type) {
    case ADD_TODO: {
      let existingState = state;
      let newState = [];
      newState.push(...existingState);
      newState.push({ id: action.id, text: action.text });
      return newState;
    }

    case DELETE_TODO: {
      const deletestate = state.filter(data => {
        return data.id !== action.id;
      });

      return deletestate;
    }
    case EDIT_TODO: {
      const editstate = state.map(data => {
        if (data.id == action.id) {
          data.text = action.text;
        }
        return data;
      });
      return editstate;
    }
    case ADD_DRAG_TODO: {
      let existingState = state;
      let newState = [];
      newState.push(...existingState);
      newState.push(action.data);
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default todo;
