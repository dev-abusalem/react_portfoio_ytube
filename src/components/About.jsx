import React from 'react'

const About = () => {
  return (
    <section id="about" className='px-16'>
        <div className="container mx-auto">
            <div className="about__wrapper py-24">
                <div className="about__heading text-center relative">
                    <h1 className='uppercase  opacity-10 text-7xl md:text-9xl font-bold text-slate-500'>ABOUT US</h1>
                    <h2 className='about_second_heading text-2xl md:text-3xl font-semibold pb-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Know Me More</h2>
                </div>
                <div className="about__body md:flex justify-center align-top mt-14 ">
                    <div className="w-full md:w-2/3 mr-10 ">
                        <h3 className= 'text-2xl md:text-3xl font-semibold'>I'm <span className='text-emerald-600'>Abu Salem</span>, Full Stack Developer</h3>
                        <br></br><p>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <br></br><p>Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
                    </div>
                    <div className="w-full md:w-1/3 ">
                        <ul>
                            <li className='py-3 border-slate-200 border-b-2'><strong>Name:</strong> Simone Olivia</li>
                            <li className='py-3 border-slate-200 border-b-2'><strong>Email:</strong> <a href="/" className='text-emerald-600'>chat@simone.com</a></li>
                            <li className='py-3 border-slate-200 border-b-2'><strong>Age:</strong> Simone Olivia</li>
                            <li className='py-3 border-slate-200 border-b-2'><strong>From:</strong>Los Angeles, California</li>
                        </ul>

                    <div className="download__cv__button mt-8 text-center">
                        <a className='py-3 px-8 bg-emerald-600 text-white rounded-full hover:bg-emerald-500 duration-300 shadow-md' href="/">Download CV</a>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default About