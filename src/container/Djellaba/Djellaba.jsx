import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { images } from '../../constants';
import './Djellaba.css';

import Tilt from 'react-parallax-tilt';



const galleryImages = [
    images.d1,
    images.d2,
    images.d3,
    images.d4,
    images.d5,
    images.d6,
    images.d7,
    images.d8,
    images.d9,
    images.d10,
    images.d11,
    images.d12,
    images.d13,

]

const Djellaba = () => {
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
        <div className='app__djellaba flex__center' id='djellaba'>

            <div className='app__djellaba-images'>
                <div className='app__djellaba-images_container' ref={scrollRef}>
                    {galleryImages.map((image, index) => (
                        <Tilt
                            className='tilt__div'                           
                            transitionSpeed={2500}
                            gyroscope={true}>
                            
                            <div className='app__djellaba-images_card ' key={`djellaba-images-${index + 1}`}>
                                <img src={image} alt="djellaba" />
                                
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

export default Djellaba;
