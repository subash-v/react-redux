import React, { Component } from "react";
import Todo from "./Todo";
import styles from "./TodoList.module.css";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: null
    };
    this.inProgressRef = React.createRef();
    this.todoRef = React.createRef();
    this.doneRef = React.createRef();
    this.todoCo = null;
    this.inProgressCo = null;
    this.doneCo = null;
  }
  componentDidMount() {
    this.todoCo = {
      left: this.todoRef.current.getBoundingClientRect().left,
      right: this.todoRef.current.getBoundingClientRect().right
    };
    this.inProgressCo = {
      left: this.inProgressRef.current.getBoundingClientRect().left,
      right: this.inProgressRef.current.getBoundingClientRect().right
    };
    this.doneCo = {
      left: this.doneRef.current.getBoundingClientRect().left,
      right: this.doneRef.current.getBoundingClientRect().right
    };
  }
  handleInput = val => {
    this.setState({ todo: val });
  };
  addTodo = () => {
    if (this.props.addTodo) {
      this.props.addTodo(this.state.todo);
      this.setState({ todo: "" });
    }
  };
  handleEnter = key => {
    // console.log(key);
    if (key === "Enter") {
      this.addTodo();
    }
  };
  handleMouseMove(event) {
    const mouseCoordinates = { x: event.pageX, y: event.pageY };
    this.setState({ mouseCoordinates });
  }
  handleMouseDown(val, event) {
    event.stopPropagation();
    this.setState({ selectedTask: val });
  }
  render() {
    console.log("this.props", this.state.selectedTask);
    return (
      <div>
        <input
          type={"text"}
          value={this.state.todo}
          onChange={e => {
            this.handleInput(e.target.value);
          }}
          onFocus={true}
          onKeyDown={e => {
            this.handleEnter(e.key);
          }}
        />
        <button
          onClick={() => {
            this.addTodo();
          }}
        >
          ADD
        </button>
        <div
          //   onMouseUp={() => {
          //     this.handleMouseUp();
          //   }}
          onMouseMove={e => this.handleMouseMove(e)}
          //   onMouseLeave={() => this.handleMouseLeave()}
        >
          <div className={styles.column} ref={this.todoRef}>
            <div className={styles.card}>
              <div className={styles.header}>Things To Do</div>
              {this.props.todo.map(val => (
                <div
                  className={styles.row}
                  // style={{
                  //   transform: `translate(${mouse.x}px , ${mouse.y}px)`
                  // }}
                  onMouseDown={e => this.handleMouseDown(val, e)}
                >
                  <Todo
                    text={val.text}
                    editTodo={(id, text) => this.props.editTodo(id, text)}
                    deleteTodo={id => this.props.deleteTodo(id)}
                    id={val.id}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.column} ref={this.inProgressRef}>
            <div className={styles.card}>
              <div className={styles.header}>Doing</div>
              {/* {this.state.inprogress.map(val => (
                <div
                  className={styles.row}
                  onMouseDown={e => this.handleMouseDown(val, e)}
                >
                  <Todo
                    text={val.text}
                    editTodo={(id, text) => this.props.editTodo(id, text)}
                    deleteTodo={id => this.props.deleteTodo(id)}
                    id={val.id}
                  />
                </div>
              ))} */}
            </div>
          </div>
          <div className={styles.column} ref={this.doneRef}>
            <div className={styles.card}>
              <div className={styles.header}>Done</div>
              {/* {this.state.done.map(val => (
                <div
                  className={styles.row}
                  onMouseDown={e => this.handleMouseDown(val, e)}
                >
                  <Todo
                    text={val.text}
                    editTodo={(id, text) => this.props.editTodo(id, text)}
                    deleteTodo={id => this.props.deleteTodo(id)}
                    id={val.id}
                  />
                </div>
              ))} */}
            </div>
          </div>

          {/* {this.props.data &&
            this.props.data.map(val => {
              return (
                <Todo
                  text={val.text}
                  editTodo={(id, text) => this.props.editTodo(id, text)}
                  deleteTodo={id => this.props.deleteTodo(id)}
                  id={val.id}
                />
              );
            })} */}
        </div>
      </div>
    );
  }
}
