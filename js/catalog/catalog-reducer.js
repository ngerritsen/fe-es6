const initialState = {
  sortOn: '',
  products: null,
  loading: false
};

export default function catalogReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'CHANGE_SORTING':
      return Object.assign({}, state, {
        sortOn: action.value,
        loading: true
      });
    case 'GET_PRODUCTS_SUCCEEDED':
      return Object.assign({}, state, {
        products: action.products,
        loading: false
      });
    default:
      return state;
  }
}
