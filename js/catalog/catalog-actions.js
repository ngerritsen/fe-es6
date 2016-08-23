export const changeSorting = (value) => (dispatch) => {
  dispatch({ type: 'CHANGE_SORTING', value });

  return fetch(`products-${value}.html`)
    .then((res) => res.text())
    .then((products) => {
      setTimeout(() => dispatch(getProductsSucceeded(products)), 1000);
    });
};

const getProductsSucceeded = (products) => ({ type: 'GET_PRODUCTS_SUCCEEDED', products });
