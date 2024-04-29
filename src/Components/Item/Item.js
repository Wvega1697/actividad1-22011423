import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Item.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../reducers/tasksSlice";
import { removeGoal } from "../../reducers/goalsSlice";

function Item(props) {
  const type = useSelector((state) => state.type.value);
  const dispatch = useDispatch();
  const typeText = type === 0 ? "Task" : "Goal";
  const removeItem = (e) => {
    e.preventDefault();
    if (type === 0) {
      dispatch(removeTask(props.index));
    } else {
      dispatch(removeGoal(props.index));
    }
    props.onDelete(typeText + ' removed!');
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Text>{props.name}</Card.Text>
        <Card.Title>Description</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Title>Due Date</Card.Title>
        <Card.Text>{props.dueDate}</Card.Text>
        <Button variant="info" onClick={removeItem}>Complete</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
