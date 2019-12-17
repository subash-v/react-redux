import React, { Component } from "react";
import styles from "./Todo.module.css";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text ? this.props.text : "",
      editing: false
    };
  }
  handleEnter = key => {
    if (key === "Enter") {
      this.props.editTodo(this.props.id, this.state.text);
      this.setState({ editing: !this.state.editing });
    }
  };
  handleEdit = () => {
    this.props.editTodo(this.props.id, this.state.text);
    this.setState({ editing: !this.state.editing });
  };
  render() {
    return (
      <div className={styles.base}>
        {this.state.editing === false ? (
          <div
            className={styles.name}
            onDoubleClick={() => {
              this.handleEdit();
            }}
          >
            {this.props.text}
          </div>
        ) : (
          <div>
            <input
              type="text"
              value={this.state.text}
              onChange={e => {
                this.setState({ text: e.target.value });
              }}
              onKeyDown={e => {
                this.handleEnter(e.key);
              }}
              style={{ height: "30px" }}
            />
            <div
              className={styles.button}
              onClick={() => {
                this.handleEdit();
              }}
            >
              ADD
            </div>
          </div>
        )}
        {/* <div className={styles.label}>{props.description}</div> */}
        <div style={{ marginTop: 10 }}>
          <div
            className={styles.button}
            onClick={() => {
              this.setState({ editing: !this.state.editing });
            }}
          >
            Edit
          </div>
          <div
            className={styles.button}
            onClick={() => this.props.deleteTodo(this.props.id)}
          >
            Delete
          </div>
        </div>
      </div>
    );
  }
}
