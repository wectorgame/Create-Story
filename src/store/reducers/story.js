const initialState = {
  stories: [],
};
const handlers = {
  DEFAULT: (state) => state,
};
export default function storyReducer(state = initialState, action) {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
}
