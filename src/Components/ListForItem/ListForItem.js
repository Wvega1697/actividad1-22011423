import React from 'react';
import Item from '../Item/Item';

function ListForItem() {
  const goals = [
    { name: 'Task 1', description: 'Elaborate project for DAW course.', dueDate: '22/04/2024' },
    { name: 'Task 1 - Final', description: 'Send repository project for DAW course.', dueDate: '26/04/2024' },
    { name: 'Task 1', description: 'Elaborate project for DAW course.', dueDate: '22/04/2024' },
    { name: 'Task 1 - Final', description: 'Send repository project for DAW course.', dueDate: '26/04/2024' },
    { name: 'Task 1', description: 'Elaborate project for DAW course.', dueDate: '22/04/2024' },
    { name: 'Task 1 - Final', description: 'Send repository project for DAW course.', dueDate: '26/04/2024' },
    { name: 'Task 1', description: 'Elaborate project for DAW course.', dueDate: '22/04/2024' },
    { name: 'Task 1 - Final', description: 'Send repository project for DAW course.', dueDate: '26/04/2024' },
    { name: 'Task 1', description: 'Elaborate project for DAW course.', dueDate: '22/04/2024' },
    { name: 'Task 1 - Final', description: 'Send repository project for DAW course.', dueDate: '26/04/2024' },
    { name: 'Task 1', description: 'Elaborate project for DAW course.', dueDate: '22/04/2024' },
    { name: 'Task 1 - Final', description: 'Send repository project for DAW course.', dueDate: '26/04/2024' },
    { name: 'Task 1', description: 'Elaborate project for DAW course.', dueDate: '22/04/2024' },
    { name: 'Task 1 - Final', description: 'Send repository project for DAW course.', dueDate: '26/04/2024' },
  ];

  return (
    <div>
      {goals.map((goal, index) => (
        <Item
          key={index}
          name={goal.name}
          description={goal.description}
          dueDate={goal.dueDate}
        />
      ))}
    </div>
  );
}

export default ListForItem;
