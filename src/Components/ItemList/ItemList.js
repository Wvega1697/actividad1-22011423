import React from "react";
import Item from "../Item/Item";
import { useSelector } from "react-redux";

function ItemList(props) {
  const goals = useSelector((state) => state.goals.value);
  const tasks = useSelector((state) => state.tasks.value);
  const type = useSelector((state)  => state.type.value);
  const lists = type === 0 ? tasks : goals;

  const handleDelete = (type) => {
    props.onDelete('danger', type);
  };

  return (
    <div>
      {
      lists.map((object, index) => (
        <Item
          key={index}
          index={object.index}
          name={object.name}
          description={object.description}
          dueDate={object.dueDate}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default ItemList;
