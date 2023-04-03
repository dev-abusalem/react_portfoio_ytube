import React from 'react'
import PortfolioTabs from '../shared/PortfolioTabs'

const Portfolio = () => {
  return (
    <section className='mt-16'>
    <div className="p-12">
        <div className="about__wrapper ">
            <div className="about__heading text-center relative">
                <h1 className='uppercase  opacity-10 text-7xl md:text-9xl font-bold text-slate-500'>PORTFOLIO</h1>
                <h2 className='about_second_heading text-2xl w-full md:text-3xl font-semibold pb-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>My Recent Works !</h2>
            </div>
            <div className="mt-14">
              <PortfolioTabs />
            </div>

        </div>
    </div>
</section>
  )
}

export default Portfolio