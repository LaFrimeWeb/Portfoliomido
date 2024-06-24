import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
            <div className='w-full flex flex-col items-center justify-center m-auto'>
                <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>

                    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px]'>
                            Contain
                        </div>
                        <a
                            href='https://www.youtube.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex flex-row items-center my-[15px] cursor-pointer'
                        >
                            <FaYoutube />
                            <span className='text-[15px] ml-[6px]'>YouTube</span>
                        </a>
                        <a
                            href='https://github.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex flex-row items-center my-[15px] cursor-pointer'
                        >
                            <FaGithub />
                            <span className='text-[15px] ml-[6px]'>GitHub</span>
                        </a>
                    </div>

                    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px]'>
                            Social Media
                        </div>
                        <a
                            href='https://www.instagram.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex flex-row items-center my-[15px] cursor-pointer'
                        >
                            <FaInstagram />
                            <span className='text-[15px] ml-[6px]'>Instagram</span>
                        </a>
                        <a
                            href='https://www.linkedin.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex flex-row items-center my-[15px] cursor-pointer'
                        >
                            <FaLinkedin />
                            <span className='text-[15px] ml-[6px]'>LinkedIn</span>
                        </a>
                    </div>

                    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px]'>
                            Mail
                        </div>
                        <a
                            className='flex flex-row items-center my-[15px] cursor-pointer'
                        >
                            <span className='text-[15px] ml-[6px]'><a href="mailto:treshlol202@gmail.com"> treshlol202@gmail.com</a></span>
                        </a>
                    </div>
                </div>

                <div className='mb-[20px] text-[15px] text-center'>
                    &copy; Mehdi Dinari 2024 Inc. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer