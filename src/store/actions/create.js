import axiosStory from "../../axios/axios-story";
import {
  CHECKBOX_VALUE,
  CURRENT_EXCURSIONS,
  CURRENT_PLACE,
  DATE_IN,
  DATE_OUT,
  GUEST_COUNTER,
} from "./actionTypes";

export function dateInHandler(date, out = false) {
  if (out)
    return {
      type: DATE_OUT,
      date,
    };
  return {
    type: DATE_IN,
    date,
  };
}
export function counterChanger(num) {
  return {
    type: GUEST_COUNTER,
    guests: num ? 1 : -1,
  };
}
export function newExcursions(exc) {
  return {
    type: CURRENT_EXCURSIONS,
    exc,
  };
}
export function newPlace(place) {
  return {
    type: CURRENT_PLACE,
    place,
  };
}
export function checkBoxChanger(name, checked) {
  return {
    type: CHECKBOX_VALUE,
    name,
    checked,
  };
}
export function finishStory() {
  return async (dispatch, getState) => {
    try {
      await axiosStory.post("story.json", getState().create.story);
    } catch (e) {
      console.log(e);
    }
  };
}
