import axios from "axios";
import { GET_ERRORS, GET_PROJECT, GET_PROJECTS, DELETE_PROJECT } from "./types";

export const addProjectTask = (
  backlogId,
  projectTask,
  history
) => async dispatch => {
  await axios.post(`/api/backlog/${backlogId}`, projectTask);
  history.push(`/projectBoard/${backlogId}`);
};
