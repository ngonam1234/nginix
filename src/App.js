import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import ProductDetail from './component/Products/ProductDetail';
import AuthVerify from './common/auth-verify';
import { Order } from './component/Order/Order';
import UserInformation from './component/UserInfomation/UserInfomation';
import Login from './component/Login/Login';
import Purchase from './component/Purchase/Purchase';
import {Footer} from './component/Footer/Footer';
import "@material-tailwind/react/tailwind.css";
import { useSelector } from 'react-redux';

function App() {
  const state = useSelector(state=>state.auth);
  return (
    <div>
      <div>
        <Header/>
        <Switch>
          <Route path='/products/:productName' component={ProductDetail} />
          <Route path='/purchase/:productName'>
            {state.user ? <Purchase /> : <Redirect to={`/login?success=purchase&product=${useLocation().pathname.split('/').pop()}`} />}
          </Route>
          <Route path='/orders'>
            {state.user ? <Order /> : <Redirect to="/login?success=order" />}
          </Route>
          <Route path='/user' component={UserInformation} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </div>
      <AuthVerify >
      </AuthVerify>
    </div>
  );
}

export default App;