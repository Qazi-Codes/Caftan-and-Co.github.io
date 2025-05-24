import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images';



import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className='app__navbar'>

      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>

      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Accueil</a></li>
        <li className='p__opensans'><a href="#about">À propos </a></li>
        <li className='p__opensans'><a href="#catalogue">Catalogue</a></li>               
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
        
      </ul>

      <div className='app__navbar-login'>
        <a href="#contact" className='p__opensans'>Call</a>
        <div/>
        
        <a href="https://wa.me/00212661305828" className='p__opensans'>
          <img src={images.waicon} alt="whatsapp" style={{scale:"1.5"}} />
        </a>
        
      </div>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href="#home">Home</a></li>
              <li className='p__opensans'><a href="#about">About</a></li>
              <li className='p__opensans'><a href="#menu">Menu</a></li>
              <li className='p__opensans'><a href="#awards">Awards</a></li>
              <li className='p__opensans'><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}

      </div>

    </nav>
  )
};

export default Navbar;
