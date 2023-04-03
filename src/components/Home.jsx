import React from 'react'
import Typewriter from 'typewriter-effect';

const Home = () => {
    const backgroundImageUrl = '../asstes/home_bg.jpg';

  return (
    <section className='h-screen'>
        <div className="bg-cover bg-center h-full" style={{ 
            backgroundImage: `url('../src/assets/home_bg.jpg')`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",            
            }}>
            <div className="bg-black bg-opacity-70 h-full flex justify-center items-center">
            <div className="text-white z-10 relative text-center">
                <h2 className='text-xl md:text-2xl font-semibold'>Welcome</h2>
                <div className='w-full text-2xl md:text-6xl	py-4 font-bold'>
                    <Typewriter 
                    
                    options={{
                        strings: ["I'm Md Abu Salem", "I'm Web Designer", "I'm Web Developer", "I'm A Freelancer"],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </div>
                <p className='text-xl'>based in Los Angeles, California.</p>
                <div className="home__button mt-8">
                    <a className='py-3 px-10 rounded-full border-2 font-semibold text-white border-emerald-600 hover:bg-emerald-600 duration-300' href="#">HIRE ME</a>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Home