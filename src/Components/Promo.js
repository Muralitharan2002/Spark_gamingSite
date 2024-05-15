import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import fortnite from "../Assets/fortnite.jpg"
import ronin from "../Assets/ronin.png"
import tekken from "../Assets/tekken.jpg"
import deathspace from "../Assets/deathspace.jpg"

import { motion } from "framer-motion"

function Promo() {

    const promo = [
        {
            img: tekken,
            rate: "9.0",
            price: "2,999"
        },
        {
            img: fortnite,
            rate: "8.6",
            price: "1,999"
        },
        {
            img: deathspace,
            rate: "8.2",
            price: "2,599"
        },
        {
            img: ronin,
            rate: "8.0",
            price: "1,999"
        },
    ]

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.2,
            }
        }
    }


    const card = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        }

    }

    return (
        <div className='bg-black lg:px-16 px-3 py-10 pb-40 -mt-1 overflow-hidden'>
            <div className='flex items-end justify-between flex-wrap gap-10 mb-20'>
                <motion.div className=' space-y-4'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "linear" }}
                    viewport={{ once: true }}
                >
                    <h3 className='font-Main text-5xl'>GAME PROMOS</h3>
                    <p className='font-primary text-xl text-slate-400'>SPECIAL OFFER</p>
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "linear" }}
                    viewport={{ once: true }}
                >
                    <button className='bg-[#D74452] flex items-center gap-3 border border-[#D74452] hover:bg-black duration-500 cursor-pointer  py-4 px-10 font-primary text-lg'>
                        LOAD MORE
                        <BsArrowRight />
                    </button>
                </motion.div>

            </div>

            <motion.div className='flex lg:justify-center justify-around lg:flex-nowrap flex-wrap gap-10'
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "linear" }}
            >
                {
                    promo.map((item, index) => (
                        <motion.div key={index} className='lg:w-[23rem] md:w-[19rem] w-[23rem] relative overflow-hidden card'
                            variants={card}

                        >
                            <img src={item.img} alt="" className='w-full h-full' loading='lazy' />
                            {/* <div> */}
                            <div className=' bg-black lg:w-[5rem] md:w-[5rem] w-[4rem] lg:py-3 md:py-3 py-2 text-center absolute top-0 -right-24 card-1 duration-500 backdrop-blur'>
                                <p className='lg:text-3xl md:text-3xl text-xl font-Main'>{item.rate}</p>
                                <p className='lg:text-lg md:text-lg text-[#D74452] tracking-widest'>RATE</p>
                            </div>
                            <div className=' bg-black lg:w-[8rem] md:w-[8rem] w-[6rem] lg:py-3 py-2 text-center absolute bottom-0 -left-36 card-2 duration-500 backdrop-blur'>
                                <p className='lg:text-3xl md:text-3xl text-xl font-Main'>&#8377; {item.price}</p>
                                <p className='lg:text-lg md:text-lg text-[#D74452] tracking-widest'>PRICE</p>
                            </div>
                            {/* </div> */}
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    )
}

export default Promo