import {
  CURRENT_EXCURSIONS,
  CURRENT_PLACE,
  DATE_IN,
  GUEST_COUNTER,
} from "./actionTypes";

export function dateInHandler(date) {
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
