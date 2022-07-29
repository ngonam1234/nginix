
const order = JSON.parse(localStorage.getItem("order"));

const initialState = order
  ? { ...order }
  : {};

  const orderReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case 'PUT_ORDER':
        return {
          ...payload,
        };
      default:
        return state;
    }
  };
  
  export default orderReducer;