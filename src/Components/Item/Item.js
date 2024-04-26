import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "./Item.scss";

function Item({ name, description, dueDate }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Text>{name}</Card.Text>
        <Card.Title>Description</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Title>Due Date</Card.Title>
        <Card.Text>{dueDate}</Card.Text>
        <Button variant="info">Complete</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
