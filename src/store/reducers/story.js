import {
  FETCH_STORIES_ERROR,
  FETCH_STORIES_START,
  FETCH_STORIES_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  stories: [],
  loading: false,
  error: null,
};
export default function storyReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STORIES_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_STORIES_ERROR:
      return {
        ...state,
        error: action.e,
        loading: false,
      };
    case FETCH_STORIES_SUCCESS:
      return {
        ...state,
        stories: action.stories,
        loading: false,
      };
    default:
      return state;
  }
}
