import './App.css'
import img from "./assets/profile.jpg"
import About from './components/About'
import Counter from './components/Counter'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Skills from './components/Skills'
import Social from './components/Social'
import Summary from './components/Summary'
import Testimonials from './components/Testimonials'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TestiCarosal from './shared/TestiCarosal'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'
import {AiOutlineMenu} from "react-icons/ai"
import { useState } from 'react'
function App() {

  const [menushow, setMenuShow] = useState(false);

  const handleShow = () =>{
    setMenuShow(!menushow)
  }

  return (
    <div className="App">
      <div className="block md:flex relative justify-between full__site__wrapper">
        <div className="full__site__wrapper__left relative  bg-gray-900 p-8 text-white top-0 md:h-screen	md:sticky left-0 w-full md:w-1/5	 " >
          <div className="left__header ">
            <a href="#" className="profile__img flex justify-center items-center">
              <img src={img} alt="" className=' rounded-full border-4 md:border-8 border-slate-600 w-1/2 md:w-full ' />
            </a>
            <div className="text-center mt-2">
              <h4 className='text-xl font-semibold	'>Abu Salem</h4>
            </div>
          </div>
          <div className='flex md:hidden justify-end align-middle'>
            <AiOutlineMenu onClick={handleShow} className='text-4xl border rounded p-2 border-slate-200 hover:bg-slate-200 hover:text-slate-700 duration-200'  />
          </div>
          <div className={ menushow ? "left__body md:block mt-6 flex justify-center items-start" : "hidden md:block" }>
            <Navbar />
          </div>

          <div className="left_footer mt-10">
            <Social />
          </div>


        </div>
        <div className="full__site__wrapper__right md:w-4/5 overflow-x-hidden">
          <Home />
          <About />
          <Counter />
          <Services />
          <Summary />
          <Skills />
          <Portfolio />
          <Testimonials />
          <GetInTouch />
          <Footer />
        </div>
      </div>
    </div>

  )
}

export default App
