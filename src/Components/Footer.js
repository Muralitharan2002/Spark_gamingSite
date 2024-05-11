import React from 'react'
import logo from '../Assets/logo.png'
import label1 from "../Assets/label1.png"
import label2 from "../Assets/label2.png"
import label3 from "../Assets/label3.png"
import label4 from "../Assets/label4.png"
import label5 from "../Assets/label5.png"
import { NavLink } from 'react-router-dom'

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

function Footer() {
    const label = [
        {
            img1: label1
        }, {
            img1: label2
        }, {
            img1: label3
        }, {
            img1: label4
        }, {

            img1: label5
        }
    ]
    return (
        <div className=' bg-footer bg-cover bg-no-repeat bg-center -mt-1'>
            <div className='flex items-center lg:justify-between md:justify-center justify-center sm:flex-wrap gap-10 lg:flex-nowrap md:flex-wrap flex-wrap border-b border-slate-500 pt-10 pb-8 lg:mx-20 md:mx-10 mx-3'>
                {
                    label.map((item, index) => (
                        <div key={index} className='lg:w-44 md:w-44 w-28'>
                            <img src={item.img1} alt="" className='w-full' loading='lazy' />
                        </div>
                    ))
                }
            </div>
            <div className=' py-28 space-y-10 px-3'>
                <div className='lg:text-5xl text-3xl font-Main flex items-center justify-center gap-2 z-40'>
                    <img src={logo} alt="spark logo" className='lg:w-11 w-9' loading='lazy' />
                    <p>SPARK</p>
                </div>
                <div>
                    <ul className='flex justify-center flex-wrap gap-10 font-primary text-base'>
                        <li className='hover:text-slate-500 duration-300'><NavLink>ABOUT</NavLink></li>
                        <li className='hover:text-slate-500 duration-300'><NavLink>GAMES</NavLink></li>
                        <li className='hover:text-slate-500 duration-300'><NavLink>FQA</NavLink></li>
                        <li className='hover:text-slate-500 duration-300'><NavLink>BLOG</NavLink></li>
                        <li className='hover:text-slate-500 duration-300'><NavLink>CONTACT</NavLink></li>
                    </ul>
                </div>
                <div className='flex gap-5 justify-center flex-wrap'>
                    <div className='cursor-pointer border border-slate-700 hover:border-[#D74452] duration-300 p-3 text-lg'><FaFacebookF /></div>
                    <div className='cursor-pointer border border-slate-700 hover:border-[#D74452] duration-300 p-3 text-lg'><FaTwitter /></div>
                    <div className='cursor-pointer border border-slate-700 hover:border-[#D74452] duration-300 p-3 text-lg'><FaYoutube /></div>
                    <div className='cursor-pointer border border-slate-700 hover:border-[#D74452] duration-300 p-3 text-lg'><FaTelegramPlane /></div>
                    <div className='cursor-pointer border border-slate-700 hover:border-[#D74452] duration-300 p-3 text-lg'><FaSteam /></div>
                    <div className='cursor-pointer border border-slate-700 hover:border-[#D74452] duration-300 p-3 text-lg'><FaDiscord /></div>
                </div>

            </div>

            <div className='text-center font-primary py-3'>Copyright © Spark 2024. All Right Reserved.</div>
        </div>
    )
}

export default Footer