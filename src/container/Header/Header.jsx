import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Feel the culture" />
      <h1 className='app__header-h1'>Luxury fashion designed just for you</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia aliquid tempore. </p>
      <button type='button' className='custom__button'> Marhaba </button>
    </div>

    <div className='app__wrapper_img'>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="signature-video"
      >
        <source src={require('../../assets/hero.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
);

export default Header;
