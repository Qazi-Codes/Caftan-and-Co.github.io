import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    < FooterOverlay />
    < Newsletter />

    <div className="app__footer-links">

      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact</h1>
        <p className="p__opensans">Sharay chufuni</p>
        <p className="p__opensans">+212 6754329099</p>
        <p className="p__opensans">+212 6755432678</p>

      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer logo" />
        <p className="p__opensans">Couture refined especially for you</p>
        
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />

        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working hours</h1>
        <p className="p__opensans">Monday - Friday</p>
        <p className="p__opensans">10:00am - 9:00pm</p>
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">12:00am - 4:00pm</p>

      </div>

    </div>

    <div className="footer__copyright">
      <p className="p__opensans"> 2022 Made by The Migrating Bird (qazicodes@gmail.com). All rights reserved.</p>
    </div>

  </div>
);

export default Footer;
