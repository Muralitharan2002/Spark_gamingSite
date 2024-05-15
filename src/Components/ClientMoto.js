import React from 'react'
import { FaCcVisa } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { CgCommunity } from "react-icons/cg";
import { PiTrendDownBold } from "react-icons/pi";

import { motion } from "framer-motion"

function ClientMoto() {

    const content = [
        {
            symbol: <FaCcVisa />,
            Name: "PAYMENT",
            content: "Lorem ipsum dolor sit ame consect adipiscing elitse do eiusmod consect."
        },
        {
            symbol: <IoGameController />,
            Name: "GAMES",
            content: "Lorem ipsum dolor sit ame consect adipiscing elitse do eiusmod consect."
        },
        {
            symbol: <PiTrendDownBold />,
            Name: "CHEAP",
            content: "Lorem ipsum dolor sit ame consect adipiscing elitse do eiusmod consect."
        },
        {
            symbol: <CgCommunity />,
            Name: "COMMUNITY",
            content: "Lorem ipsum dolor sit ame consect adipiscing elitse do eiusmod consect."
        },
    ]

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.2,
                ease: "linear"
            }
        }
    }


    const card = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                ease: "linear"
            }
        }

    }

    return (
        <div className=' bg-middle bg-cover lg:px-20 md:px-10 px-3 py-36 -mt-1 overflow-hidden'>
            <div className='flex items-center justify-between flex-wrap gap-10'>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "linear" }}
                    viewport={{ once: true }}
                >
                    <h3 className='font-Main lg:text-5xl md:text-5xl text-4xl'>
                        Why Buy From Us
                    </h3>
                    <p className='font-primary text-xl mt-4 text-slate-400'>
                        CLIENTS MOTIVATION
                    </p>
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "linear" }}
                    viewport={{ once: true }}
                >
                    <btton className='bg-[#D74452] border border-[#D74452] hover:bg-black duration-500 cursor-pointer px-10 py-3 font-primary text-xl mt-10 text-center'>
                        Download Game
                    </btton>
                </motion.div>
            </div>


            <motion.div className='flex flex-wrap lg:flex-nowrap gap-5'
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {
                    content.map((item, index) => (
                        <motion.div key={index} className=' flex-auto border border-slate-700 hover:border-slate-300 duration-500 w-72 h-72  flex flex-col items-center justify-center p-5 gap-3 mt-16 m-auto '
                            variants={card}
                        // transition={{ duration: 0.7, delay: 0.2, ease: "linear" }}
                        >
                            <div className='text-5xl duration-500 hover:-translate-y-2'>
                                {item.symbol}
                            </div>
                            <div className='font-Main text-3xl mt-3'>{item.Name}</div>
                            <div className='text-center font-primary text-lg text-slate-400 '>
                                {item.content}
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>

        </div>
    )
}

export default ClientMoto