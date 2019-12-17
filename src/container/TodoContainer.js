import {
  addTodo,
  deleteTodo,
  editTodo,
  addObjToTodo
} from "../action/todo.action";
import { connect } from "react-redux";
// import AddTodoForm from "../Components/AddTodoForm.js";
// import Todo from "../Todo.js";
import TodoList from "../component/TodoList";
import {
  addInProgressTodo,
  deleteInProgressTodo,
  editInProgressTodo
} from "../action/inProgressTodo.action";
import {
  addDoneTodo,
  deleteDoneTodo,
  editDoneTodo
} from "../action/doneTodo.action";

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {
      dispatch(addTodo(text));
    },
    deleteTodo: id => {
      dispatch(deleteTodo(id));
    },
    editTodo: (id, text) => {
      dispatch(editTodo(id, text));
    },
    addObjToTodo: data => {
      dispatch(addObjToTodo(data));
    },
    addDoneTodo: data => {
      dispatch(addDoneTodo(data));
    },
    deleteDoneTodo: id => {
      dispatch(deleteDoneTodo(id));
    },
    editDoneTodo: (id, text) => {
      dispatch(editDoneTodo(id, text));
    },
    addInProgressTodo: data => {
      dispatch(addInProgressTodo(data));
    },
    deleteInProgressTodo: id => {
      dispatch(deleteInProgressTodo(id));
    },
    editInProgressTodo: (id, text) => {
      dispatch(editInProgressTodo(id, text));
    }
  };
};

const mapStateToProps = state => {
  return {
    todo: state.todo,
    inProgressTodo: state.inProgressTodo,
    doneTodo: state.doneTodo
  };
};

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoContainer;
