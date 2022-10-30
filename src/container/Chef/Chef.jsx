import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding' >
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="Nadia img" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Designers Word" />
      <h1 className='headtext__cormorant'>Philosophie</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>A modern touch with traditional designs.</p>
        </div>
        <p className='p__opensans'>Fabric sourced by the most authentic and highest quality control to make you feel luxurious.  </p>
      </div>

      <div className='app__chef-sign'>
        <p>Nadia Tlemsani</p>
        <p className='p__opensans'>Designer and founder</p>
        <video src={images.sign} autoPlay={true} loop="loop" />
                 
      </div>

    </div>
  </div>
);

export default Chef;
