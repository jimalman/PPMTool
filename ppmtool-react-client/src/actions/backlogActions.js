import axios from "axios";
import { GET_ERRORS, GET_BACKLOG, GET_PROJECTS, DELETE_PROJECT } from "./types";

export const addProjectTask = (
  backlogId,
  projectTask,
  history
) => async dispatch => {
  try {
    await axios.post(`/api/backlog/${backlogId}`, projectTask);
    history.push(`/projectBoard/${backlogId}`);
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getBacklog = backlogId => async dispatch => {
  try {
    const response = await axios.get(`/api/backlog/${backlogId}`);
    dispatch({
      type: GET_BACKLOG,
      payload: response.data
    });
  } catch (err) {}
};
