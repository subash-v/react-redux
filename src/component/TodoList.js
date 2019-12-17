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
    if (key === "Enter") {
      this.addTodo();
    }
  };
  handleMouseMove(event) {
    const mouseCoordinates = { x: event.pageX, y: event.pageY };
    this.setState({ mouseCoordinates });
  }
  handleMouseLeave() {
    console.log("Leaving");
  }
  handleMouseDown(val, event) {
    event.stopPropagation();
    this.setState({ selectedTask: val });
  }
  deleteTask = val => {
    if (
      this.props.todo.length > 0 &&
      this.props.todo.map(value => value.id).includes(val.id)
    ) {
      this.props.deleteTodo(val.id);
    }
    if (
      this.props.inProgressTodo.length > 0 &&
      this.props.inProgressTodo.map(value => value.id).includes(val.id)
    ) {
      this.props.deleteInProgressTodo(val.id);
    }
    if (
      this.props.doneTodo.length > 0 &&
      this.props.doneTodo.map(value => value.id).includes(val.id)
    ) {
      this.props.deleteDoneTodo(val.id);
    }
  };
  handleMouseUp() {
    if (this.state.selectedTask) {
      if (
        this.state.mouseCoordinates.x > this.todoCo.left &&
        this.state.mouseCoordinates.x < this.todoCo.right &&
        !this.props.todo
          .map(value => value.id)
          .includes(this.state.selectedTask.id)
      ) {
        this.deleteTask(this.state.selectedTask);
        this.props.addObjToTodo(this.state.selectedTask);
      }
      if (
        this.state.mouseCoordinates.x > this.inProgressCo.left &&
        this.state.mouseCoordinates.x < this.inProgressCo.right &&
        !this.props.inProgressTodo
          .map(value => value.id)
          .includes(this.state.selectedTask.id)
      ) {
        this.deleteTask(this.state.selectedTask);

        this.props.addInProgressTodo(this.state.selectedTask);
      }
      if (
        this.state.mouseCoordinates.x > this.doneCo.left &&
        this.state.mouseCoordinates.x < this.doneCo.right &&
        !this.props.doneTodo
          .map(value => value.id)
          .includes(this.state.selectedTask.id)
      ) {
        this.deleteTask(this.state.selectedTask);
        this.props.addDoneTodo(this.state.selectedTask);
      }
      this.setState({ selectedTask: null });
    }
  }
  render() {
    return (
      <div className={styles.base}>
        <h1>TODO</h1>
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
            style={{ height: "30px" }}
          />
          <div
            className={styles.button}
            onClick={() => {
              this.addTodo();
            }}
          >
            ADD
          </div>
        </div>
        <div
          onMouseUp={() => {
            this.handleMouseUp();
          }}
          onMouseMove={e => this.handleMouseMove(e)}
          onMouseLeave={() => this.handleMouseLeave()}
        >
          <div className={styles.column} ref={this.todoRef}>
            <div className={styles.card}>
              <div className={styles.header}>TODO</div>
              {this.props.todo.map(val => (
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
              ))}
            </div>
          </div>
          <div className={styles.column} ref={this.inProgressRef}>
            <div className={styles.card}>
              <div className={styles.header}>InProgress</div>
              {this.props.inProgressTodo.map(val => (
                <div
                  className={styles.row}
                  onMouseDown={e => this.handleMouseDown(val, e)}
                >
                  <Todo
                    text={val.text}
                    editTodo={(id, text) =>
                      this.props.editInProgressTodo(id, text)
                    }
                    deleteTodo={id => this.props.deleteInProgressTodo(id)}
                    id={val.id}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.column} ref={this.doneRef}>
            <div className={styles.card}>
              <div className={styles.header}>Completed</div>
              {this.props.doneTodo.map(val => (
                <div
                  className={styles.row}
                  onMouseDown={e => this.handleMouseDown(val, e)}
                >
                  <Todo
                    text={val.text}
                    editTodo={(id, text) => this.props.editDoneTodo(id, text)}
                    deleteTodo={id => this.props.deleteDoneTodo(id)}
                    id={val.id}
                  />
                </div>
              ))}
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
