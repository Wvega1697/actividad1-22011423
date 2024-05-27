import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const asyncAddGoal = createAsyncThunk(
  "goals/asyncAddGoal",
  async (goal, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/goals/addGoal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "mL5XpgYV4oBNBjTv"
        },
        body: JSON.stringify(goal)
      });

      if (!response.ok) {
        return rejectWithValue({ status: response.status });
      }

      const data = await response.json();
      return { index: data.id, name: data.name, description: data.description, dueDate: data.dueDate };
    } catch (err) {
      return rejectWithValue({ status: 500, message: err.message });
    }
  }
);

export const asyncRemoveGoal = createAsyncThunk(
  "goals/asyncRemoveGoal",
  async (goalId, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3001/goals/removeGoal/${goalId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "mL5XpgYV4oBNBjTv"
        }
      });

      if (!response.ok) {
        return rejectWithValue({ status: response.status });
      }

      return goalId;
    } catch (err) {
      return rejectWithValue({ status: 500, message: err.message });
    }
  }
);

export const goalSlice = createSlice({
  name: "goals",
  initialState: {
    value: [
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
  extraReducers: (builder) => {
    builder
      .addCase(asyncAddGoal.fulfilled, (state, action) => {
        state.value.push(action.payload);
        state.error = null;
      })
      .addCase(asyncAddGoal.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(asyncRemoveGoal.fulfilled, (state, action) => {
        state.value = state.value.filter((goal) => goal.index !== action.payload);
        state.error = null;
      })
      .addCase(asyncRemoveGoal.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default goalSlice.reducer;
