
import './App.css';
import Header from './Pages/Header';
import Products from './Pages/Products';

import About from './Pages/About/About';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Contact from './common/Contact';


function App() {
  useEffect(()=>{
    Aos.init({duration:1300})
  },[])
  return (
    <div className="App ">
      <Header/>
      <Contact/>
      <Home />
      <Products/>
      
      <div data-aos="fade-up" className='z-0'>
        <About/>
        </div>
      <Projects/>
      
    </div>
  );
}

export default App;
