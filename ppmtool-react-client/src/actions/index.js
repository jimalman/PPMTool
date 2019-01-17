import projects from "../apis/projects";
import { GET_ERRORS, GET_PROJECT, GET_PROJECTS } from "./types";

// Create
export const createProject = (project, history) => async dispatch => {
  try {
    const response = await projects.post("./api/project", project);
    history.push("/dashboard");
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
  const response = await projects.get(`./api/project/${id}`);
  dispatch({
    type: GET_PROJECT,
    payload: response.data
  });
};
