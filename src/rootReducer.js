import { combineReducers } from "redux";
import todo from "./reducer/todo.reducer";
import inProgressTodo from "./reducer/inProgressTodo.reducer";
import doneTodo from "./reducer/doneTodo.reducer";
export default combineReducers({
  todo,
  inProgressTodo,
  doneTodo
});
