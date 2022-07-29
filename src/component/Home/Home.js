import React from 'react';
import ListInsurance from './ListInsurance/ListInsurance';
import Slider from './Slider/Slider';
import Hero from './Hero/Hero';

const Home = ({ handleLogged }) => {
  return (
    <div >
      {/* <Slider /> */}
      <Hero />
      <ListInsurance />
      {/* <Login /> */}
      {/* <Switch>
                <Route exact path='/' component={NewHome}/>
            </Switch> */}
    </div>
  );
};

export default Home;