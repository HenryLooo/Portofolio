"use client"
import React, {useState} from 'react'
import GithubIcon from "../../../public/github-mark.svg"
import LinkedinIcon from "../../../public/linkedin-mark.svg"
import WhatsappIcon from "../../../public/whatsapp-mark.svg"
import EmailIcon from "../../../public/email-mark.png"
import Link from "next/link"
import Image from "next/image"

const EmailSection = () => {
    
  return (
    <section className='grid md:grid-row my-12 md:my-12 py-24 gap-4 relative justify-center self-center'>
        
        <div 
        // className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
        // from-blue-900 to-transparent rounded-full h-80 w-80 z-10 
        // blur-lg absolute self-center"
        >

        </div>
        <div className='z-9'>
            <h5 className='text-5xl font-bold text-white my-2 text-center'>
                Let&apos;s Connect!
            </h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md text-2xl text-center '>
                I am always looking for opportunities to learn new things or
                sharpen existing skills. Whether you have a question or just wanted to contact me,
                 here are some goodways to do it!
            </p>
            <div className='socials flex flex-row gap-2 justify-center self-center'>
                <Link href="github.com">
                    <Image src={GithubIcon} alt='Github Icon' width={50} height={50}/>
                </Link>
                <Link href="linkedin.com">
                    <Image src={LinkedinIcon} alt='LinkedIn Icon' width={50} height={50}/>
                </Link>
                <Link href="whatsapp.com">
                    <Image src={WhatsappIcon} alt='Whatsapp Icon' width={50} height={50}/>
                </Link>
                <Link href="gmail.com">
                    <Image src={EmailIcon} alt='Email Icon' width={50} height={50}/>
                </Link>
            </div>
        </div>
        <div>
            {/* <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label htmlFor='email' className='text-white mb-2 block text-sm font-medium'>
                        Your Email
                    </label>
                    <input
                    name="email"
                    type='email'
                    id='email'
                    required
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg w-full p-2.5'
                    placeholder='Henry@gmail.com'/>
                </div>

                <div className='mb-6'>
                    <label htmlFor='subject' className='text-white mb-2 block text-sm font-medium'>
                        Subject
                    </label>
                    <input
                    name="subject"
                    type='text'
                    id='subject'
                    required
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg w-full p-2.5'
                    placeholder='Just testing your site!'/>
                </div>
                <div className='mb-6'>
                    <label htmlFor='message'
                    className='text-white block text-sm mb-2 font-medium'>
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg w-full p-2.5'
                        placeholder="Leave your message here!"
                    />
                </div>
                <button
                type='submit'
                className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                    Send Message
                </button>
            </form> */}
        </div>
    </section>
  )
}

export default EmailSection