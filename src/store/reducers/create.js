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
  adults: 0,
  children: 0,
  dateStart: "",
  dateOut: "",
};

export default function createReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
}
