import React from 'react'
import {FaLaptopCode, FaPencilRuler, FaPaintBrush, FaWordpress, FaShopify} from "react-icons/fa";
import {SiWebflow} from "react-icons/si"
const Services = () => {
  return (
    <section className='mt-16 bg-slate-50'>
    <div className="p-16">
        <div className="about__wrapper ">
            <div className="about__heading text-center relative">
                <h1 className='uppercase  opacity-10 text-7xl md:text-9xl font-bold text-slate-500'>SERVICES</h1>
                <h2 className='about_second_heading text-3xl font-semibold pb-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>What I Do?</h2>
            </div>

            <div className="md:flex justify-center align-top mt-14 ">
                <div className='md:w-1/2 md:mr-3'>
                    <div className="flex">
                    <div className='w-24	h-20 text-emerald-600 bg-white shadow-md rounded p-6 text-3xl'>
                        <FaPencilRuler /> 
                       </div>
                       <div className='ml-4'>
                         <h2 className='text-xl font-semibold '>Web Design</h2>
                         <p className='mt-2'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                       </div>
                    </div>
                    <div className="flex mt-8">
                    <div className='w-24	h-20 text-emerald-600 bg-white shadow-md rounded p-6 text-3xl'>
                        <FaLaptopCode /> 
                       </div>
                       <div className='ml-4'>
                         <h2 className='text-xl font-semibold '>Web Development</h2>
                         <p className='mt-2'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                       </div>
                    </div>
                    <div className="flex mt-8">
                    <div className='w-24	h-20 text-emerald-600 bg-white shadow-md rounded p-6 text-3xl'>
                        <FaPaintBrush /> 
                       </div>
                       <div className='ml-4'>
                         <h2 className='text-xl font-semibold '>Graphic Design</h2>
                         <p className='mt-2'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                       </div>
                    </div>
                </div>  
                <div className='md:w-1/2 md:ml-3'>
                    <div className="flex">
                    <div className='w-24	h-20 text-emerald-600 bg-white shadow-md rounded p-6 text-3xl'>
                        <FaWordpress /> 
                       </div>
                       <div className='ml-4'>
                         <h2 className='text-xl font-semibold '>WordPress</h2>
                         <p className='mt-2'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                       </div>
                    </div>
                    <div className="flex mt-8">
                    <div className='w-24	h-20 text-emerald-600 bg-white shadow-md rounded p-6 text-3xl'>
                        <FaShopify /> 
                       </div>
                       <div className='ml-4'>
                         <h2 className='text-xl font-semibold '>Shopify</h2>
                         <p className='mt-2'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                       </div>
                    </div>
                    <div className="flex mt-8">
                    <div className='w-24	h-20 text-emerald-600 bg-white shadow-md rounded p-6 text-3xl'>
                        <SiWebflow /> 
                       </div>
                       <div className='ml-4'>
                         <h2 className='text-xl font-semibold '>Webflow</h2>
                         <p className='mt-2'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                       </div>
                    </div>
                </div>         
            </div>
        </div>
    </div>
</section>
  )
}

export default Services