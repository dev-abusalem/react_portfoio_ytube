import React, { useState } from 'react'
import img1 from "../assets/1.jpeg"
import img2 from "../assets/2.jpeg"
import img3 from "../assets/3.jpeg"
import img4 from "../assets/4.jpeg"
const PortfolioTabs = () => {
    const [index, setIndex] = useState(0)
  return (
    <div id="tab__wrapper">
        <div className="tab__wrapper">
            <div className="tab__head mb-1 flex justify-center p-1 align-middle bg-emerald-600 rounded-sm text-white font-semibold ">
                <div className="first__tab border border-gray-400  hover:bg-gray-800 hover:text-white duration-200 cursor-pointer p-2 mx-2" onClick={()=>setIndex(0)}>
                    <h1>Tab One</h1>
                </div>
                <div className="first__tab border border-gray-400 hover:bg-gray-800 hover:text-white duration-200 cursor-pointer p-2 mx-2"  onClick={()=>setIndex(1)}>
                    <h1>Tab Two</h1>
                </div>
                <div className="first__tab border border-gray-400 hover:bg-gray-800 hover:text-white duration-200 cursor-pointer p-2 mx-2"  onClick={()=>setIndex(2)}>
                    <h1>Tab Three</h1>
                </div>
            </div>
            <div className="tab_content bg-slate-200 text-black p-6" hidden={index!=0}>
                <div className="md:flex gap-5">
                    <div className="md:w-1/3 ">
                        <img src={img1} alt="img1" />
                        <img src={img2} alt="img44" className='my-5'/>
                    </div> 
                    <div className="md:w-1/3 ">
                        <img src={img2} alt="img2" />
                        <img src={img4} alt="img1" className='my-5' />
                    </div>
                    <div className="md:w-1/3 ">
                        <img src={img3} alt="img3" />
                        <img src={img1} alt="img1" className='my-5' />
                    </div>                 
                </div>
            </div>
            <div className="tab_content bg-green-200 text-black p-6" hidden={index!=1}>
            <div className="md:flex gap-5">
                    <div className=" md:w-1/3 ">
                        
                        <img src={img2} alt="img44"/>
                        <img src={img1} alt="img1"  className='my-5' />
                    </div> 
                    <div className="md:w-1/3 ">
                        <div className='relative text-transparent hover:text-black duration-200'>
                            <img src={img4} alt="img1" />
                            <h2 className='text-3xl font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Hello</h2>
                        </div>
                        <div className='relative text-transparent hover:text-white duration-200'>
                        <img src={img3} alt="img3" className='my-5'  />
                            <h2 className='text-3xl font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Hello</h2>
                        </div>
                    </div>
                    <div className=" md:w-1/3 ">
                        <div className='relative text-transparent hover:text-white duration-200'>
                        <img src={img2} alt="img2" />
                            <h2 className='text-3xl font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Hello</h2>
                        </div>
                        <img src={img1} alt="img1" className='my-5' />
                    </div>                 
                </div>
            </div>
            <div className="tab_content bg-rose-200 text-black p-6" hidden={index!=2}>
                <h2>Lorem ipsum 3</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum libero animi veritatis ratione porro.</p>
                <a href='#'>Get More..</a>
            </div>
        </div>
    </div>
  )
}

export default PortfolioTabs