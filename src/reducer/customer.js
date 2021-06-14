const initialState = {
  address: null,
};

export const customer = (state = initialState, action) => {
  switch (action.type) {
    case 'CUSTOMER_ADDRESS': {
      return {
        ...state,
        address: action.payload,
      };
    }
    default:
      return state;
  }
};
