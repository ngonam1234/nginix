import axios from "axios";
import { useSelector } from 'react-redux';
import { store } from "..";

const domainUrl = 'http://103.9.0.239:31441/dev/';

export default class ApiClient {
  static async get(requestUrl = null, queryParams = null) {
    const response = await axios.get(domainUrl + requestUrl, {
      params: queryParams,
      headers: this.getHeaders()
    });

    return response;
  }

  static async post(requestUrl = null, queryParams = null, body = null) {
    const response = await axios.post(domainUrl + requestUrl, body, {
      params: queryParams,
      headers: this.getHeaders()
    });
    return response;
  }

  static getHeaders(contentType = 'application/json') {
    return {
      'Content-Type': contentType,
      'authorization': `Bearer ` + store.getState().auth.user.access_token,
    };
  }
}