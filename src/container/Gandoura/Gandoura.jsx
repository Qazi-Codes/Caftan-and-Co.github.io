import React from 'react';
import {  BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { images } from '../../constants';
import './Gandoura.css';

import Tilt from 'react-parallax-tilt';



const galleryImages = [images.g1,images.g2,images.g3,images.g4,images.g5,images.g6,images.g7]

const Gandoura = () => {
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
        <div className='app__bg app__gandoura flex__center' id='gandoura'>

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

export default Gandoura;
