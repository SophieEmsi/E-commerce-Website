import React from 'react';
import Slides from '../Slides';
import Stats from '../Stats';
import Collections from '../Collections';
import Banner from '../Banner';
import SubscriptionForm from '../Subscription'

const Home = () => {
  return (
    <div>
      <Slides />
      <Stats />
      <Collections />
      <Banner/>
      <SubscriptionForm />

    </div>
  );
};

export default Home;
