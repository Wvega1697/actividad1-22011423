import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    value: [
      {
        index: Date.now() + Math.random(),
        name: "Actividad 2 - Task",
        description: "Finalizar actividad 2 - task",
        dueDate: "29/04/2024",
      },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = { index: Date.now() + Math.random(), ...action.payload };
      state.value.push(newTask);
    },
    removeTask: (state, action) => {
      state.value = state.value.filter((task) => task.index !== action.payload);
    },
  },
});

export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
