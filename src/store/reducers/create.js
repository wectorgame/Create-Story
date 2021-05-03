import {
  CURRENT_EXCURSIONS,
  CURRENT_PLACE,
  DATE_IN,
  GUEST_COUNTER,
} from "../actions/actionTypes";

const initialState = {
  story: [],
  places: [
    "Судак",
    "Новый Свет",
    "Меганом",
    "Коктебель",
    "Ялта",
    "Севастополь ",
  ],
  dateIn: new Date(),
  dateOut: new Date(),
  typesTourism: ["Активный", "Познавательный", "Шоппинг-туризм"],
  excursions: ["Гастрономия", "Поход в горы", "Подводное плаванье", "Шопинг"],
  activeExcursions: [],
  restaraunts: [],
  personal: "",
  price: 0,
  error: null,
  loading: false,
  currentPlace: null,
  currentExc: [],
  guests: 0,
};

export default function createReducer(state = initialState, action) {
  switch (action.type) {
    case DATE_IN:
      return {
        ...state,
        dateIn: action.date,
      };
    case CURRENT_PLACE:
      return {
        ...state,
        currentPlace: action.place,
      };
    case CURRENT_EXCURSIONS:
      return {
        ...state,
        currentExc: action.exc,
      };
    case GUEST_COUNTER:
      return {
        ...state,
        guests: state.guests + action.guests,
      };
    default:
      return state;
  }
}
