import React from 'react'
import {IoIosCall} from "react-icons/io"
import {FaFax, FaEnvelope, FaPhoneAlt} from "react-icons/fa"
import Social from './Social'
const GetInTouch = () => {
  return (
    <section className='mt-16'>
    <div className="p-12">
        <div className="about__wrapper ">
            <div className="about__heading text-center relative">
                <h1 className='uppercase  opacity-10 text-7xl md:text-9xl font-bold text-slate-500'>CONTACT</h1>
                <h2 className='about_second_heading text-3xl font-semibold pb-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Get In Touch !</h2>
            </div>
            <div className="mt-14">
              <div className="contact__wrapper md:flex ">
                <div className="conact__left md:-3/12 mr-5 mt-1">
                    <h2 className='text-xl font-semibold'>ADDRESS</h2>
                    <p>4th Floor, Plot No.22,
                        145 Murphy Canyon Rd.
                        San Diego CA 2028</p>
                    <div className="icons mt-3">
                        <div className="flex justify-start align-middle">
                            <FaPhoneAlt className='text-xl text-emerald-600 mr-2' />
                            <a href="#">(060) 444 434 444</a>
                        </div>
                        <div className="flex justify-start my-2 align-middle">
                            <FaFax className='text-xl text-emerald-600 mr-2' />
                            <a href="#">(060) 555 545 555</a>
                        </div>
                        <div className="flex justify-start align-middle">
                            <FaEnvelope className='text-xl text-emerald-600 mr-2' />
                            <a href="#">info@example.com</a>
                        </div>
                    </div>
                    <div className='-ml-2 mt-8'>
                        <Social />
                    </div>
                </div>
                <div className="contact__right md:w-9/12 md:ml-5">
                    <h1 className='text-xl font-semibold'>SEND US A NOTE</h1>
                    <form className='mt-4'>  
                        <div className='flex'>
                        <input className='w-1/2 border border-gray-300 mr-3 p-3 rounded-md focus:outline-none focus:border-emerald-600' type="text" placeholder='Full Name' />
                        <input className='w-1/2 border border-gray-300 ml-3 p-3 rounded-md focus:outline-none  focus:border-emerald-600' type="email" placeholder='Email' />
                        </div>
                        <textarea  className=' mt-3 h-40 p-3 w-full border border-gray-300 focus:outline-none focus:border-emerald-500 rounded-md'></textarea>
                    <div className='text-center mt-4'>
                        <button className='py-2 px-12 shadow-sm hover:bg-emerald-500 duration-200 bg-emerald-600 text-white rounded-full'>SEND</button>
                    </div>
                    </form>
                </div>
              </div>
            </div>

        </div>
    </div>
</section>
  )
}

export default GetInTouch