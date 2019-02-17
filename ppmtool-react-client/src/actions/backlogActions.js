import axios from "axios";
import {
  GET_ERRORS,
  GET_BACKLOG,
  GET_PROJECT_TASK,
  DELETE_PROJECT_TASK
} from "./types";

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
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getProjectTask = (backlogId, ptId, history) => async dispatch => {
  try {
    const response = await axios.get(`/api/backlog/${backlogId}/${ptId}`);
    dispatch({
      type: GET_PROJECT_TASK,
      payload: response.data
    });
  } catch (err) {
    history.push("/dashboard");
  }
};

export const updateProjectTask = (
  backlogId,
  ptId,
  projectTask,
  history
) => async dispatch => {
  try {
    await axios.patch(`/api/backlog/${backlogId}/${ptId}`, projectTask);
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

export const deleteProjectTask = (backlogId, ptId) => async dispatch => {
  if (window.confirm(`Are you sure you want to delete project task ${ptId}?`)) {
    await axios.delete(`/api/backlog/${backlogId}/${ptId}`);
    dispatch({
      type: DELETE_PROJECT_TASK,
      payload: ptId
    });
  }
};
