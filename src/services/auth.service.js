import axios from "axios";

const API_URL = "http://103.9.0.239:31441/oauth/token?grant_type=password";

class AuthService {
  login(username, password) {
    return axios
      .post(
        API_URL, {}, {
          headers: { 'Authorization': 'Basic Y2xpZW50MzpjbGllbnQz' },
          params: {
            username: username,
            password: password
          }
      }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      })
      .catch(err => {
        console.log('Error when calling Backend:', { err });
        throw err;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();
