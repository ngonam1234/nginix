import ApiClient from "../ApiClient";
import { v4 } from "uuid";

export default class CreateOrder {
  constructor() {
    this.requestBody = {
      "requestId": v4(),
      "requestTime": Date.now(),
      "targetId": "BIC",
      "type": "BICTravelInsurance",
      "detail": {
        "orders": {
          "ordBillFirstName": "Nguyen Anh Chin",
          "ordBillMobile": "097453686312",
          "ordBillStreet1": "TTP, Đn Phượng, Hà Nội",
          "ordBillEmail": "nghiemxuanhop98@gmail.com",
          "ordDate": "2020-02-17T10:37:22",
          "ordStatus": "1",
          "ordTotalQty": 4,
          "orderPaymentMethod": 11,
          "ordPaidMoney": 10000,
          "ordDiscountAmount": 0,
          "ordSource": "DSVN"
        }
      }
    };
  }

  async postOrder() {
    const response = await ApiClient.post('order/order-service/v1/create-order', null, this.requestBody);
    return response.data;
  }

  updateTrv(amountPersons=null, amountDays=null, fromDate=null, toDate=null) {
    const trv = {
      amountPersons,
      amountDays,
      "promotion": 0,
      "promotionAddress": "",
      "fromDate": (new Date(fromDate)).toISOString().replace(".000Z", ""),
      "toDate": (new Date(toDate)).toISOString().replace(".000Z", ""),
      "issueDate": null
    };
    this.requestBody = {...this.requestBody, detail: {...this.requestBody.detail, trv}};
  }

  updateTrvDetails(peopleForm=null) {
    const trvDetails = [...peopleForm];
    this.requestBody = {...this.requestBody, detail: {...this.requestBody.detail, trvDetails}};
  }
}