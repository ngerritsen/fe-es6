const initialState = { highlight: false };

export default function headerReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'TOGGLE_HEADER_HIGHLIGHT':
      return { highlight: !state.highlight };
    default:
      return state;
  }
}
