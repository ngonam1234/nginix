import OrderService from "../services/orderService";

export const putOrder = (amountPersons, amountDays, fromDate, toDate) => (dispatch) => {
  OrderService.putOrder(amountPersons, amountDays, fromDate, toDate);
  dispatch({
    type: 'PUT_ORDER',
    payload: { amountPersons, amountDays, fromDate, toDate }
  });
};

export default putOrder;