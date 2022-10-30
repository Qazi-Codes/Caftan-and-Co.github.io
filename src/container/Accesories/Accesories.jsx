import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { images } from '../../constants';
import './Accesories.css';

import Tilt from 'react-parallax-tilt';



 const galleryImages = [
    images.ac1,
    images.ac2,
    images.ac3,
    images.ac4,
    images.ac5,
    images.ac6,
    images.ac7,
    images.ac8,
    images.ac9,
    images.ac10,
    images.ac11,
    images.ac12,
    images.ac13,
    images.ac14,
    images.ac15,
    images.ac16,
    images.ac17,
    images.ac18,
    images.ac19,
    images.ac20,
    images.ac21,
    images.ac22,
    images.ac23,
    images.ac24,
    images.ac25,
    images.ac26,
    images.ac27,
    images.ac28,
    images.ac29,
    images.ac30,
    images.ac31, 
]

const Accesories = () => {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 300;
        }
        else {
            current.scrollLeft += 300;
        }
    }
    return (
        <div className='app__bg app__accesories flex__center' id='accesories'>

            <div className='app__accesories-images'>
                <div className='app__accesories-images_container' ref={scrollRef}>
                    {galleryImages.map((image, index) => (
                        <Tilt
                            className='tilt__div_acc'                           
                            transitionSpeed={2500}
                            gyroscope={true}>
                            
                            <div className='app__accesories-images_card ' key={`accesories_image-${index + 1}`}>
                                <img src={image} alt="accesories" />
                                
                            </div>

                        </Tilt>

                    ))}
                </div>
                <div className='app__gallery-images_arrows'>
                    < BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
                    < BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />


                </div>

            </div>

        </div>
    );

};

export default Accesories;
