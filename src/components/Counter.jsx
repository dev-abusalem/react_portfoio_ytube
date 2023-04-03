import React from 'react'
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <section className='py-5 px-16'>
        <div className="container">
            <div className="counter__wrapper block md:flex align-middle ">
                <div className='p-4 border-2 m-1 border-gray-250 rounded shadow-sm text-center flex-1'>
                    <CountUp 
                        end={10} 
                        duration={4}
                        suffix="+"
                        className='text-5xl font-semibold'
                    />
                    <p>Years Experiance</p>
                </div>
                <div className='p-4 border-2 m-1 border-gray-250 rounded shadow-sm text-center flex-1'>
                    <CountUp 
                        end={250} 
                        duration={4}
                        suffix="+"
                        className='text-5xl font-semibold'
                    />
                    <p>Happy Clients</p>
                </div>
                <div className='p-4 border-2 m-1 border-gray-250 rounded shadow-sm text-center flex-1'>
                    <CountUp 
                        end={650} 
                        duration={4}
                        suffix="+"
                        className='text-5xl font-semibold'
                    />
                    <p>Projects Done</p>
                </div>
                <div className='p-4 border-2 m-1 border-gray-250 rounded shadow-sm text-center flex-1'>
                    <CountUp 
                        end={38} 
                        duration={4}
                        className='text-5xl font-semibold'
                    />
                    <p>Get Awards</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Counter