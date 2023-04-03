import React from 'react'
import {FaLaptopCode, FaPencilRuler, FaPaintBrush, FaWordpress, FaShopify} from "react-icons/fa";
import {SiWebflow} from "react-icons/si"
import datas from "./Summary/data"
const Summary = () => {
  return (
    <section className='mt-16'>
    <div className="p-12">
        <div className="about__wrapper ">
            <div className="about__heading text-center relative">
                <h1 className='uppercase  opacity-10 text-7xl md:text-9xl font-bold text-slate-500'>SUMMARY</h1>
                <h2 className='about_second_heading text-3xl font-semibold pb-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Resume</h2>
            </div>
            <div className="md:flex flex-wrap mt-14">
            {
                datas.map((data, index)=>{
                        return(
                            <div key={index} className='md:w-1/2 p-4 '>
                                <div className="summary__wrapper mb-4">
                                  <h2 className='text-xl font-semibold'>{data.heading}</h2>
                                  <div className="summary__card shadow-md border border-gray-300 rounded p-5 mt-3 ">
                                      <span className='bg-emerald-500 rounded text-white px-3 text-sm '>{data.time}</span>
                                      <h3 className='text-lg font-semibold mt-3'>{data.title}</h3>
                                      <p className='text-red-300 my-3'>{data.university}</p>
                                      <p className='pb-2'>{data.desc}</p>
                                  </div>
                                </div>
                            </div>  
                        )
                })
            }
            </div>

        </div>
    </div>
</section>
  )
}

export default Summary