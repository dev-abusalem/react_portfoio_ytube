import React from 'react'
import TestiCarosal from '../shared/TestiCarosal';


const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className='mt-16'>
    <div className="p-12">
        <div className="about__wrapper ">
            <div className="about__heading text-center relative">
                <h1 className='uppercase  opacity-10 text-7xl md:text-9xl font-bold text-slate-500'>TESTIMONIALS</h1>
                <h2 className='about_second_heading text-3xl font-semibold pb-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Client Speak !</h2>
            </div>
            <div className="mt-14">
              <div className="slider__wrapper">
                 <TestiCarosal />
              </div>
            </div>

        </div>
    </div>
</section>
  )
}

export default Testimonials