import {
  CHECKBOX_VALUE,
  CURRENT_EXCURSIONS,
  CURRENT_PLACE,
  DATE_IN,
  DATE_OUT,
  GUEST_COUNTER,
} from "../actions/actionTypes";

const initialState = {
  story: {
    dateIn: new Date(),
    dateOut: new Date(),
    currentPlace: null,
    currentExc: [],
    food: false,
    transport: false,
    freeTime: false,
    guests: 0,
    personal: "",
    price: 0,
  },
  places: [
    "Судак",
    "Новый Свет",
    "Меганом",
    "Коктебель",
    "Ялта",
    "Севастополь",
  ],
  typesTourism: ["Активный", "Познавательный", "Шоппинг-туризм"],
  excursions: [
    "Гастрономия",
    "Поход в горы",
    "Дайвинг",
    "Шопинг",
    "Морская прогулка",
  ],
  activeExcursions: [],
  error: null,
  loading: false,
};

export default function createReducer(state = initialState, action) {
  switch (action.type) {
    case DATE_IN:
      return {
        ...state,
        story: { ...state.story, dateIn: action.date },
      };
    case DATE_OUT:
      return {
        ...state,
        story: { ...state.story, dateOut: action.date },
      };

    case CURRENT_PLACE:
      return {
        ...state,
        story: { ...state.story, currentPlace: action.place },
      };
    case CURRENT_EXCURSIONS:
      return {
        ...state,
        story: { ...state.story, currentExc: action.exc },
      };
    case GUEST_COUNTER:
      return {
        ...state,
        story: { ...state.story, guests: state.story.guests + action.guests },
      };
    case CHECKBOX_VALUE:
      return {
        ...state,
        story: { ...state.story, [action.name]: action.checked },
      };
    default:
      return state;
  }
}
