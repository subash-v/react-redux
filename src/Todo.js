import React, { Component } from "react";
import styles from "./Todo.module.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: null
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
  render() {
    console.log("this.props", this.props);
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
        {this.props.data &&
          this.props.data.map(val => {
            return (
              //   <div
              //     onClick={() => {
              //       this.props.deleteTodo(val.id);
              //     }}
              //     className={styles.todoContainer}
              //   >
              <div className={styles.base}>
                <div className={styles.name}>{val.text}</div>
                {/* <div className={styles.label}>{props.description}</div> */}
                <div style={{ marginTop: 10 }}>
                  <div
                    className={styles.button}
                    onClick={() => {
                      this.props.editTodo(val.id, "hi");
                    }}
                  >
                    Edit
                  </div>
                  <div
                    className={styles.button}
                    onClick={() => this.props.deleteTodo(val.id)}
                  >
                    Delete
                  </div>
                </div>
              </div>
              //   </div>
            );
          })}
      </div>
    );
  }
}
