import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const asyncAddTask = createAsyncThunk(
  "tasks/asyncAddTask",
  async (task, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/tasks/addTask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "mL5XpgYV4oBNBjTv"
        },
        body: JSON.stringify(task)
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

export const asyncRemoveTask = createAsyncThunk(
  "tasks/asyncRemoveTask",
  async (taskId, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3001/tasks/removeTask/${taskId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "mL5XpgYV4oBNBjTv"
        }
      });

      if (!response.ok) {
        return rejectWithValue({ status: response.status });
      }

      return taskId;
    } catch (err) {
      return rejectWithValue({ status: 500, message: err.message });
    }
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    value: [
    ],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncAddTask.fulfilled, (state, action) => {
        state.value.push(action.payload);
        state.error = null;
      })
      .addCase(asyncAddTask.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(asyncRemoveTask.fulfilled, (state, action) => {
        state.value = state.value.filter((task) => task.index !== action.payload);
        state.error = null;
      })
      .addCase(asyncRemoveTask.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default tasksSlice.reducer;
