import React from 'react';
import { Form, Button } from 'react-bootstrap';
import "./FormTask.scss";

function FormTask() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGoalName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGoalDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGoalDueDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Goal
      </Button>
    </Form>
  );
}

export default FormTask;
