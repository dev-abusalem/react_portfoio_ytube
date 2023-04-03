import React from 'react'
import {GoCloudDownload} from "react-icons/go"
const Skills = () => {
  return (
    <section className='mt-16 bg-slate-50'>
    <div className="p-12">
        <div className="about__wrapper ">
            <div className="about__heading text-center relative">
                <h1 className='uppercase  opacity-10 text-7xl md:text-9xl font-bold text-slate-500'>EXPERIENCE</h1>
                <h2 className='about_second_heading text-2xl md:text-3xl font-semibold pb-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>What My Skills?</h2>
            </div>
            <div className="mt-14 md:flex flex-wrap">
                <div className="md:w-1/2 p-4">
                    <div className="heading flex align-middle justify-between">
                        <h3 className='text-lg font-semibold'>WEB DESIGN</h3>
                        <p>80%</p>
                    </div>
                    <div className="bg-gray-200 rounded-full">
                        <div className="bg-green-600 text-xs leading-none py-0 text-center text-white rounded-full w-4/5 duration-300" >80%</div>
                    </div>
                </div>
                <div className="md:w-1/2 p-4">
                    <div className="heading flex align-middle justify-between">
                        <h3 className='text-lg font-semibold'>HTML</h3>
                        <p>90%</p>
                    </div>
                    <div className="bg-gray-200 rounded-full">
                        <div className="bg-green-600 text-xs leading-none py-0 text-center text-white rounded-full w-11/12 duration-300" >90%</div>
                    </div>
                </div>

                <div className="md:w-1/2 p-4">
                    <div className="heading flex align-middle justify-between">
                        <h3 className='text-lg font-semibold'>CSS</h3>
                        <p>75%</p>
                    </div>
                    <div className="bg-gray-200 rounded-full">
                        <div className="bg-green-600 text-xs leading-none py-0 text-center text-white rounded-full w-9/12 duration-300" >75%</div>
                    </div>
                </div>

                <div className="md:w-1/2 p-4">
                    <div className="heading flex align-middle justify-between">
                        <h3 className='text-lg font-semibold'>JAVASCRIPT</h3>
                        <p>70%</p>
                    </div>
                    <div className="bg-gray-200 rounded-full">
                        <div className="bg-green-600 text-xs leading-none py-0 text-center text-white rounded-full w-8/12 duration-300" >70%</div>
                    </div>
                </div>
                <div className="md:w-1/2 p-4">
                    <div className="heading flex align-middle justify-between">
                        <h3 className='text-lg font-semibold'>WORDPRESS</h3>
                        <p>80%</p>
                    </div>
                    <div className="bg-gray-200 rounded-full">
                        <div className="bg-green-600 text-xs leading-none py-0 text-center text-white rounded-full w-4/5 duration-300" >80%</div>
                    </div>
                </div>

                <div className="md:w-1/2 p-4">
                    <div className="heading flex align-middle justify-between">
                        <h3 className='text-lg font-semibold'>WEB DEVELOPMENT</h3>
                        <p>70%</p>
                    </div>
                    <div className="bg-gray-200 rounded-full">
                        <div className="bg-green-600 text-xs leading-none py-0 text-center text-white rounded-full w-8/12 duration-300" >70%</div>
                    </div>
                </div>

            </div>
            
        </div>
        <div className="download__btn mt-16 text-center">
                <a href="#" className='border-2 text-lg py-3 px-6 border-slate-400 rounded-full text-slate-500 hover:bg-slate-400 hover:text-slate-50 duration-200'>
                    Download CV 
                    <GoCloudDownload className='inline-block ml-2' />
                </a>
            </div>
    </div>
</section>
  )
}

export default Skills