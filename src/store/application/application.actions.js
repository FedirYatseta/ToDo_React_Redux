import { createAction } from "@reduxjs/toolkit";


const addTaskSuccessful = createAction("addTask/successful");
const deleteTaskSuccessful = createAction("deleteTask/successful");
const updateSuccessful = createAction("update/successful");

export const actions = {
  deleteTaskSuccessful,
  addTaskSuccessful,
  updateSuccessful,
};
