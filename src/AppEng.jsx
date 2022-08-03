
import './App.css';
import Header from './Pages/Header';
import Products from './Pages/Products';

import About from './Pages/About/About';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useRef, useContext } from 'react';
import Contact from './common/Contact';



function AppEng() {
  useEffect(()=>{
    Aos.init({duration:800})
  },[])

 const projectRef = useRef(null)
 const homeRef = useRef(null)
 const productRef = useRef(null)
 const aboutRef = useRef(null)

  return (


    <div className="App ">
      <Header  homeRef= {homeRef} productRef= {productRef} aboutRef ={aboutRef } projectRef= {projectRef}/>
      <Contact />
      <Home homeRef= {homeRef} />
      <Products productRef= {productRef} />
      
      <div data-aos="fade-up" className='z-0'>
        <About aboutRef ={aboutRef }/>
        </div>
      <Projects  projectRef= {projectRef}/>
      
    </div>

  );
}

export default AppEng;