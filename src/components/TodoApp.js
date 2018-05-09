import React, { Component } from "react";
import { hot } from "react-hot-loader";

import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";

import styles from "./TodoApp.less";

@hot(module)
export default class TodoApp extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <h2 className={styles.header}>todos</h2>
          <div className={styles.app}>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
