import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Findus.css'
const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id="contact">
    <div className='app__wrapper_info'>
      < SubHeading title='Contact' />
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Contact</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Centre commercial Ait Baha N155, 10060 . </p>
        <p className="p__opensans">Rabat, Morocco.</p> 
        <p className="p__cormorant" style={{color:'#DCCA87', margin: '2rem 0'}}>Les horaires d'ouverture:</p>
        <p className="p__opensans">Lundi - Samedi: 10:00 - 20:00</p>
        <p className="p__opensans">Dimanche: 16:00 to 20:00</p>
      </div>
      <button className="custom__button" style={{marginTop:'2rem'}}>Contactez-nous </button>
    </div>
      
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="find-us"  />
    </div>


  </div>
);

export default FindUs;
