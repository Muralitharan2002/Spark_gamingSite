import React from 'react'
import gta6 from '../Assets/gta_6.png'

import { motion } from "framer-motion"

function NewRelease() {
    return (
        // <div className='place-item-center p-auto'>
        <div className='bg-black flex items-center justify-center lg:flex-nowrap flex-wrap lg:px-12 px-3 lg:gap-7 md:gap-10 gap-10 py-40 -mt-1 overflow-hidden'>
            <motion.div className=' space-y-4 lg:flex-1 lg:w-1/3 md:w-full'
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3, ease: 'linear' }}
                viewport={{ once: true }}
            >
                <h3 className='font-Main text-5xl'>
                    <p className='text-[#D74452] text-4xl pb-3'> Never Be</p>

                    <p>The Same</p>
                </h3>
                <p className='font-primary text-base text-slate-400 min-w-60 space-y-3'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt anim….</p>
                </p>
            </motion.div>

            {/* <div className='grid grid-cols-2'> */}
            <motion.div className='lg:w-[23rem] md:w-[30rem] w-auto'
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3, ease: 'linear' }}
                viewport={{ once: true }}
            >
                <img src={gta6} alt="grand auto theft 6" className='w-full' loading='lazy' />
            </motion.div>

            <motion.div className='lg:flex-1 md:flex-grow flex-grow'
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3, ease: 'linear' }}
                viewport={{ once: true }}
            >
                <p className='font-primary text-xl tracking-widest my-5'>
                    PLAY FIRST ON
                </p>
                <div className='font-Main text-4xl gap-1'>
                    <p><span className='text-[#D74452] pe-3'>19 DECEMBER</span>2026</p>
                </div>
                <p className='font-primary text-xl mt-5'>“Come To All Platforms”</p>
                <div className='flex items-center justify-center'>
                    <div className='font-Main grid grid-cols-2 grid-rows-2 place-item-center text-center lg:w-[23rem] md:w-[23rem] w-[15rem] mt-20'>
                        <span className='py-10 text-2xl border-slate-700 border-e'>XBOX</span>
                        <span className='py-10 text-2xl '>PS-5</span>
                        <span className='py-10 text-2xl border-slate-700 border-e border-t'>UPLAY</span>
                        <span className='py-10 text-2xl border-slate-700 border-t'>PC</span>
                    </div>
                </div>
            </motion.div>
            {/* </div> */}
        </div>

        // </div>
    )
}

export default NewRelease