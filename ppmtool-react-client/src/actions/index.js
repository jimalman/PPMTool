import axios from "axios";
import projects from "../apis/projects";
import { GET_ERRORS, GET_PROJECT, GET_PROJECTS, DELETE_PROJECT } from "./types";

// Create
export const createProject = (project, history) => async dispatch => {
  try {
    const response = await projects.post("./api/project", project);
    history.push("/dashboard");
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

export const getProjects = () => async dispatch => {
  const response = await projects.get("./api/project/all");
  dispatch({
    type: GET_PROJECTS,
    payload: response.data
  });
};

export const getProject = (id, history) => async dispatch => {
  try {
    const response = await projects.get(`./api/project/${id}`);
    dispatch({
      type: GET_PROJECT,
      payload: response.data
    });
  } catch (error) {
    history.push("/dashboard");
  }
};

export const deleteProject = id => async dispatch => {
  await projects.delete(`./api/project/${id}`);

  dispatch({
    type: DELETE_PROJECT,
    payload: id
  });
};
