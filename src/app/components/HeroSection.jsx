"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'


const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            transition={{duration: 3.5}} 
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                    Henry&apos;s {" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Artstation',1000
                            ,'Experiences',1000
                            ,'Curriculum Vitae',1000
                            ,'Hobbies',1000
                            ,'Portofolio',1000
                        ]}
                        wrapper='span'
                        repeat={Infinity}
                        speed={50}
                    />
                    </span>
                </h1>
                
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quidem esse, adipisci eum consequuntur consequatur,
                    excepturi est similique nulla aspernatur nisi nesciunt quasi natus illo nostrum cum sunt pariatur, atque iure?
                </p>
                <div>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white'>
                    Contact Me
                    </button>
                <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3'>
                    <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                        Linked In
                    </span>
                    </button>
                </div>
            </motion.div>
            <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            transition={{duration: 3.5}}
            className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mt-2">
                <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
                    <Image src="/images/Hero-image.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={500}
                    height={500}></Image>
                </div>
            </motion.div>
        </div>
        
    </section>
  )
}

export default HeroSection