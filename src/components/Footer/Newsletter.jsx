import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      < SubHeading title="Newsletter" />
      <h1 className='headtext__cormorant'> Get updates on our latest couture</h1>
      <p className="p__opensans">Choose the finest</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="enter your email"/>
      <button className="custom__button">Stay trendy</button>
    </div>
  </div>
);

export default Newsletter;
