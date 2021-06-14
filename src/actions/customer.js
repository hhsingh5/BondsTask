export const setAddress = value => dispatch => {
  return dispatch({
    type: 'CUSTOMER_ADDRESS',
    payload: value,
  });
};
