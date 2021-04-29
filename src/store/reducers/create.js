const initialState = {
  story: [],
};
const handlers = {
  DEFAULT: (state) => state,
};
export default function createReducer(state = initialState, action) {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
}
