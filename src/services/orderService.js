class OrderService {
  putOrder(amountPersons, amountDays, fromDate, toDate) {
    localStorage.setItem("order", JSON.stringify({amountPersons, amountDays, fromDate, toDate}));
  }
}

export default new OrderService();