import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

import Tilt from 'react-parallax-tilt';



const galleryImages = [images.gallery01, images.gallery02, images.gallery03]

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 500;
    }
    else {
      current.scrollLeft += 500;
    }
  }
  return (
    <div className='app__gallery flex__center' id='catalogue'>
      <div className='app__gallery-content' >
        < SubHeading title="Instaram" />
        <h1 className='headtext__cormorant'>Catalogue</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        <a href="#showcase">
          <button type='button' className='custom__button'> Explore more </button></a>
      </div>


      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <Tilt
              className='tilt__div'
              transitionSpeed={2500}
              perspective={500}             
              gyroscope={true}>

              <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
                <img src={image} alt="gallery" />
                <BsInstagram className='gallery__image-icon' />
              </div>

            </Tilt>

          ))}
        </div>

        {/* <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image,index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div> */}

        <div className='app__gallery-images_arrows'>
          < BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          < BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />


        </div>

      </div>

    </div>
  );

};

export default Gallery;
