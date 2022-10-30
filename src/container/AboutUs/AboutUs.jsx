import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="bkgrnd-img" />

    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>Nos atouts</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans p__about'> Les créations de Nadia Tlemsani allient richesse et originalité, mélange entre l'artisanat marocain et la modernité occidentale, confectionnées à partir des tissus les plus nobles tels que la Crêpe Georgette, la soie, la mousseline, le velours de soie, combiné au savoir faire des meilleurs artisans Fassi, Rbati et Slawi.</p>
        
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="knife-img" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Histoire</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'> Diplômée en 1990 de la prestigieuse Ecole de Stylisme et Modélisme EL BAZ à Casablanca. Le style de Mme Nadia Tlemsani est un mélange d'Occident et d'Orient. Cela est dû à ses origines Bulgare, un pays dont les traditions vestimentaires sont très folkloriques et fortement inspirées de l'Empire Ottoman. Ses Caftans et Takchitas sont rehaussés de passementeries tout en leur conservant à la fois un attachement à la somptuosité traditionnelle, broderies, perçages pour le plus grand bonheur des femmes d'ici et d'ailleurs.Nadia Tlemsani vous propose un large choix de Caftans, Takchitas, Djellabas, Jabadors... authentiques, originales, fait à partir des matières les plus nobles et confectionnées par les meilleurs artisans du Maroc.</p>
        
      </div>
      
    </div>
  </div>
);

export default AboutUs;
