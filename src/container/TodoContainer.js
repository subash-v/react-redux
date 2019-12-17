import { addTodo, deleteTodo, editTodo } from "../action/todo.action";
import { connect } from "react-redux";
// import AddTodoForm from "../Components/AddTodoForm.js";
// import Todo from "../Todo.js";
import TodoList from "../component/TodoList";
import {} from "../action/inProgressTodo.action";
import {} from "../action/doneTodo.action";

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
    }
  };
};

const mapStateToProps = state => {
  return {
    todo: state.todo
  };
};

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoContainer;
