import { createSlice } from "@reduxjs/toolkit";

export const goalSlice = createSlice({
  name: "goals",
  initialState: {
    value: [
      {
        index: Date.now() + Math.random(),
        name: "Actividad 2 - Goal",
        description: "100 puntos en la actividad 2 - Goal",
        dueDate: "29/04/2024",
      },
    ],
  },
  reducers: {
    addGoal: (state, action) => {
      const newGoal = { index: Date.now() + Math.random(), ...action.payload };
      state.value.push(newGoal);
    },
    removeGoal: (state, action) => {
      state.value = state.value.filter((goal) => goal.index !== action.payload);
    },
  },
});

export const { addGoal, removeGoal } = goalSlice.actions;
export default goalSlice.reducer;
