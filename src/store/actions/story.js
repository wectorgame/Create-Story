import axiosStory from "../../axios/axios-story";
import {
  FETCH_STORIES_ERROR,
  FETCH_STORIES_START,
  FETCH_STORIES_SUCCESS,
} from "./actionTypes";

export function fetchStories() {
  return async (dispatch) => {
    dispatch(fetchStoriesStart());
    try {
      const response = await axiosStory.get("story.json");
      const stories = [];
      Object.keys(response.data).forEach((item) => {
        stories.push(response.data[item]);
      });
      dispatch(fetchStoriesSuccess(stories));
    } catch (e) {
      dispatch(fetchStoriesError(e));
    }
  };
}
export function fetchStoriesSuccess(stories) {
  return {
    type: FETCH_STORIES_SUCCESS,
    stories,
  };
}
export function fetchStoriesStart() {
  return {
    type: FETCH_STORIES_START,
  };
}
export function fetchStoriesError(e) {
  return {
    type: FETCH_STORIES_ERROR,
    error: e,
  };
}
