const initialState = {
  userData: undefined,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA': {
      state.userData = action.data;
      break;
    }
    case 'GET_DATA': {
      return {userData: state.userData};
    }
    case 'SELECT_USER': {
      return {user: state.userData[action.data]};
    }
    default:
      return state;
  }
};
