import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./TaskSlice";
import notificationReducer from "./SettingsSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    settings: notificationReducer,
  },
});
export default store;
