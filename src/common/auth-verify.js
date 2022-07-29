import React from "react";
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../actions/auth';

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  history.listen(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const decodedJwt = parseJwt(user.access_token);
      if (decodedJwt.exp * 1000 < Date.now()) {
        dispatch(logout());
      }
    }
  });

  return <div></div>;
};

export default AuthVerify;
