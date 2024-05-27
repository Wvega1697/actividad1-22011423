import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { asyncAddGoal } from "../../reducers/goalsSlice";
import { asyncAddTask } from "../../reducers/tasksSlice";
import "./ItemForm.scss";

function ItemForm(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const type = useSelector((state) => state.type.value);
  const typeText = type === 0 ? "Task" : "Goal";
  const dispatch = useDispatch();
  const taskError = useSelector((state) => state.tasks.error);

  useEffect(() => {
    if (taskError) {
      if (taskError.status === 400) {
        props.onAdd("danger", `Failed to add ${typeText}. Bad request.`);
      } else if (taskError.status === 401) {
        props.onAdd("danger", `Failed to add ${typeText}. Verify the API Key.`);
      } else if (taskError.status === 404) {
        props.onAdd("danger", `Failed to remove ${typeText}.`);
      } else {
        props.onAdd("danger", `Failed to add ${typeText}.`);
      }
    }
  }, [taskError, props, typeText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && dueDate) {
      if (type === 0) {
        dispatch(asyncAddTask({ name, description, dueDate }))
          .then((response) => {
            if (!response.error) {
              props.onAdd("success", `${typeText} added successfully!`);
            }
          });
      } else {
        dispatch(asyncAddGoal({ name, description, dueDate }))
          .then((response) => {
            if (!response.error) {
              props.onAdd("success", `${typeText} added successfully!`);
            }
          });
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
