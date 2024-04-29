import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addGoal } from "../../reducers/goalsSlice";
import { addTask } from "../../reducers/tasksSlice";
import "./ItemForm.scss";

function ItemForm(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const type = useSelector((state) => state.type.value);
  const typeText = type === 0 ? "Task" : "Goal";
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && dueDate) {
      if (type === 0) {
        dispatch(addTask({ name, description, dueDate }));
        props.onAdd("success",`${typeText} added successfully!`);
      } else {
        dispatch(addGoal({ name, description, dueDate }));
        props.onAdd("success", `${typeText} added successfully!`);
      }
      setName("");
      setDescription("");
      setDueDate("");
    } else {
      props.onAdd("warning", `Please fill all fields!`);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Due Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter due date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add {typeText}
      </Button>
    </Form>
  );
}

export default ItemForm;
