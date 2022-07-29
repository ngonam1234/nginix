import ApiClient from "../ApiClient";

export const getAllOrder = async (page=null, size=null) => {
  requestBody = {...requestBody, detail: {page, size}};
  const response = await ApiClient.post('order/order-service/v1/get-all-orders', null, requestBody);
  return response.data;
};
let requestBody= {
  "requestId": "requestId",
  "requestTime": "requestTime",
  "targetId": "BIC",
  "type": "BICTravelInsurance"
};

export default getAllOrder;