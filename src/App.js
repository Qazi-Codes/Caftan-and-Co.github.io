
import React from 'react'

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, Gandoura, Accesories, Djellaba, Caftan} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    
    <Header />
    <AboutUs />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <Caftan/>
    <Gandoura />
    <Djellaba/>
    <Accesories/>
    <FindUs />
    <Footer />
  </div>
); 

export default App


