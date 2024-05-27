import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Item.scss";
import { useDispatch, useSelector } from "react-redux";
import { asyncRemoveTask } from "../../reducers/tasksSlice";
import { asyncRemoveGoal } from "../../reducers/goalsSlice";

function Item(props) {
  const type = useSelector((state) => state.type.value);
  const dispatch = useDispatch();
  const typeText = type === 0 ? "Task" : "Goal";

  const removeItem = async (e) => {
    e.preventDefault();
    try {
      if (type === 0) {
        await dispatch(asyncRemoveTask(props.index));
        props.onDelete(`${typeText} removed successfully!`);
      } else {
        await dispatch(asyncRemoveGoal(props.index));
        props.onDelete(`${typeText} removed successfully!`);
      }
    } catch (err) {
      console.log("ERR");
      props.onDelete(`Failed to remove ${typeText}.`);
    }
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
        <Button variant="info" onClick={removeItem}>
          Complete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
