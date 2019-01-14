import projects from "../apis/projects";
import { GET_ERRORS } from "./types";

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
