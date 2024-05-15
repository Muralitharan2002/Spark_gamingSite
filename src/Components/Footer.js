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

import { motion } from "framer-motion"

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

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const card = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <div className=' bg-footer bg-cover bg-no-repeat bg-center -mt-1'>
            <motion.div className='flex items-center lg:justify-between md:justify-center justify-center sm:flex-wrap gap-10 lg:flex-nowrap md:flex-wrap flex-wrap border-b border-slate-500 pt-10 pb-8 lg:mx-20 md:mx-10 mx-3 overflow-hidden'
                variants={container}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.2, ease: "linear" }}
                viewport={{ once: true }}
            >
                {
                    label.map((item, index) => (
                        <motion.div key={index} className='lg:w-44 md:w-44 w-28'
                            variants={card}
                        >
                            <img src={item.img1} alt="" className='w-full' loading='lazy' />
                        </motion.div>
                    ))
                }
            </motion.div>
            <div className=' py-28 space-y-10 px-3'
            >
                <motion.div className='lg:text-5xl text-3xl font-Main flex items-center justify-center gap-2 z-40 overflow-hidden'
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "linear" }}
                    viewport={{ once: true }}
                >
                    <img src={logo} alt="spark logo" className='lg:w-11 w-9' loading='lazy' />
                    <p>SPARK</p>
                </motion.div>

                <div>
                    <motion.ul className='flex justify-center flex-wrap gap-10 font-primary text-base'
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.2, ease: "linear" }}
                        viewport={{ once: true }}
                    >
                        <motion.li className='hover:text-slate-500 duration-300' variants={card}><NavLink>ABOUT</NavLink></motion.li>
                        <motion.li className='hover:text-slate-500 duration-300' variants={card}><NavLink>GAMES</NavLink></motion.li>
                        <motion.li className='hover:text-slate-500 duration-300' variants={card}><NavLink>FQA</NavLink></motion.li>
                        <motion.li className='hover:text-slate-500 duration-300' variants={card}><NavLink>BLOG</NavLink></motion.li>
                        <motion.li className='hover:text-slate-500 duration-300' variants={card}><NavLink>CONTACT</NavLink></motion.li>
                    </motion.ul>
                </div>
                <motion.div className='flex gap-5 justify-center flex-wrap'
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
                    viewport={{ once: true }}
                >
                    <motion.div className='cursor-pointer border border-slate-700 hover:border-[#D74452] duration-300 p-3 text-lg' variants={card}><FaFacebookF /></motion.div>
                    <motion.div className='cursor-pointer border border-slate-700 hover:border-[#D74452] duration-300 p-3 text-lg' variants={card}><FaTwitter /></motion.div>
                    <motion.div className='cursor-pointer border border-slate-700 hover:border-[#D74452] duration-300 p-3 text-lg' variants={card}><FaYoutube /></motion.div>
                    <motion.div className='cursor-pointer border border-slate-700 hover:border-[#D74452] duration-300 p-3 text-lg' variants={card}><FaTelegramPlane /></motion.div>
                    <motion.div className='cursor-pointer border border-slate-700 hover:border-[#D74452] duration-300 p-3 text-lg' variants={card}><FaSteam /></motion.div>
                    <motion.div className='cursor-pointer border border-slate-700 hover:border-[#D74452] duration-300 p-3 text-lg' variants={card}><FaDiscord /></motion.div>
                </motion.div>

            </div>

            <div className='text-center font-primary py-3'>Copyright © Spark 2024. All Right Reserved.</div>
        </div>
    )
}

export default Footer