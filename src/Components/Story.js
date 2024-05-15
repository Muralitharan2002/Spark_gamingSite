import React from 'react'
import gow from '../Assets/gow5.jpg'
import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion"

function Story() {
    return (
        <div className='bg-black flex items-center justify-center lg:flex-nowrap flex-wrap-reverse text-stone-300 px-2 py-20 -mt-1 overflow-hidden'>
            <motion.div className='lg:w-2/4 md:w-4/5 w-full p-2 '
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'linear' }}
                viewport={{ once: true }}
            >
                <img src={gow} alt="God Of War" className='w-full' loading='lazy' />
                <div className='bg-[#D74452] border border-[#D74452] hover:bg-black duration-500 cursor-pointer  py-3 font-primary text-xl mt-10 text-center lg:mx-20'>
                    Download Game
                </div>
            </motion.div>
            <div className='xl:w-7/12 md:w-3/6  mx-2 layout '>
                <motion.h3 className='font-Main lg:text-5xl md:text-5xl text-4xl'
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: 'linear' }}
                    viewport={{ once: true }}
                >
                    The Background <br /> Story
                </motion.h3>
                <motion.p className='font-Main text-3xl text-[#D74452] mt-16'
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3, ease: 'linear' }}
                    viewport={{ once: true }}
                >
                    Bloodborne - First Try!
                </motion.p>
                <motion.div className='font-primary mt-10 text-slate-400'
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4, ease: 'linear' }}
                    viewport={{ once: true }}
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dosertakle eiusmod tempor incididunt ut labore et dolore magna aliqua. Miker veniam, quis nostrud exercitation ullamco laboris. Sed ut perspi ciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam.</p>
                    <br />
                    <p> Miker veniam, quis nostrud exercitation ullamco laboris. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam aperiam. Lorem ipsum dolor sit amet consectetur adipiscing elit…..</p>
                </motion.div>
                <motion.div

                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.5, ease: 'linear' }}
                    viewport={{ once: true }}
                >
                    <button className='mt-9 font-primary text-[#D74452] hover:text-stone-300 duration-500 text-lg flex items-center gap-4 tracking-wider '>Read More
                        <BsArrowRight />
                    </button>
                </motion.div>

            </div>
        </div>
    )
}

export default Story