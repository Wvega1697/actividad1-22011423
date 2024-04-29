import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./reducers/goalsSlice";
import taskReducer from "./reducers/tasksSlice";
import typeReducer from "./reducers/typeSlice";
import alertReducer from "./reducers/alertSlice";

export default configureStore({
  reducer: {
    type: typeReducer,
    goals: goalReducer,
    tasks: taskReducer,
    alert: alertReducer
  },
});
