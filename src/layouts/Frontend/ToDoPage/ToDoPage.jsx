import "../../../assets/css/App.css";
import React from "react";
import TodoList from "../../../components/ToDoList/ToDoList";
import { Jumbotron } from "reactstrap";

export const ToDoPage = () => (
  <div className="container">
    <Jumbotron>
      <h1 className="display-3">ToDo Page</h1>
      <p className="lead">This is Grant's ToDo utility</p>
      <TodoList />
    </Jumbotron>
  </div>
);