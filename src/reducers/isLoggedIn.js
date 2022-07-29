const loggedReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        name: 'hung',
        logged: true,
        ...state
      };
    case 'LOG_OUT':
      return {
        name: 'hung',
        logged: false,
        ...state
      };
    default:
      return {
        name: '',
        logged: false,
        ...state
      };
  }
};

export default loggedReducer;