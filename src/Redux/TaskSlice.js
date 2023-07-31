import { createSlice, nanoid } from "@reduxjs/toolkit";

export const TaskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: nanoid(),
        name: action.payload.task,
        isDone: false,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      return state.filter((item) => {
        return item.id !== id;
      });
    },
    markTaskAsDone: (state, action) => {
      const { taskId } = action.payload;
      const task = state.find((item) => item.id === taskId);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
  },
});

export const { addTask, deleteTask, markTaskAsDone } = TaskSlice.actions;
export default TaskSlice.reducer;
