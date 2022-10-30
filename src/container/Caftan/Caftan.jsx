import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { images } from '../../constants';
import './Caftan.css';

import Tilt from 'react-parallax-tilt';



const galleryImages = [
    images.c1,
    images.c2,
    images.c3,
    images.c4,
    images.c5,
    images.c6,
    images.c7,
    images.c8,
    images.c9,
    images.c10,
    images.c11,
    images.c12,
    images.c13,
    images.c14,
    images.c15,
    images.c16,
    images.c17,
    images.c18,
    images.c19,
    images.c20,
    images.c21,
    images.c22,
    images.c23,
    images.c24,
    images.c25,
    images.c26,
    images.c27,
    images.c29,
    

]

const Caftan = () => {
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
        <div className='app__gandoura flex__center' id='gandoura'>

            <div className='app__gandoura-images'>
                <div className='app__gandoura-images_container' ref={scrollRef}>
                    {galleryImages.map((image, index) => (
                        <Tilt
                            className='tilt__div'                           
                            transitionSpeed={2500}
                            gyroscope={true}>
                            
                            <div className='app__gandoura-images_card ' key={`gandoura-images-${index + 1}`}>
                                <img src={image} alt="gandoura" />
                                
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

export default Caftan;