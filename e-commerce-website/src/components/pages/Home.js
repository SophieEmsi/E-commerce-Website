import React from 'react';
import Slides from '../Slides';
// import Announcement from '../Announcement';
// import NavBar from '../NavBar';
// import Cart from './Cart';
import Stats from '../Stats';
import Collections from '../Collections';
import Banner from '../Banner';

const Home = () => {
  return (
    <div>
      <Slides />
      <Stats />
      <Collections />
      <Banner/>

    </div>
  );
};

export default Home;
