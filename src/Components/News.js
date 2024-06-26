import React from 'react'
import game5 from "../Assets/game5.webp"
import game2 from "../Assets/game2.webp"
import game3 from "../Assets/game3.jpg"
import game4 from "../Assets/game4.webp"
import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion"

function News() {

    const news1 = [

        {
            heading: "Forge Bonds in the Gaming Realm",
            date: "October 28, 2023",
            content: "Join our vibrant community at SPARK, where friendships flourish over shared gaming passions!",
            img: game5
        },
        {
            heading: "Epic Adventures Await",
            date: "April 18, 2023",
            content: "Conquer new realms with our adventure games collection, available at unbeatable prices!",
            img: game2
        }

    ]

    const news2 = [

        {
            heading: "Ride the Gaming Wave",
            date: "January 10, 2024",
            content: "Dive into the hottest games and experience the pulse of the industry firsthand!",
            img: game3
        },
        {
            heading: "Immerse in Excitement",
            date: "December 29,2022",
            content: "Plunge into endless thrills with our eclectic game selection to narratives!",
            img: game4
        }


    ]

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const card = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <div className='bg-black pb-40 lg:px-20 md:px-15 px-3 -mt-1 overflow-hidden'>
            <div className='text-center'>
                <motion.h3 className='font-Main text-5xl'
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: 'linear' }}
                    viewport={{ once: true }}
                >ARTICLE</motion.h3>
                <motion.p className='font-primary text-xl mt-5'
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: 'linear' }}
                    viewport={{ once: true }}
                >SPARK NEWS</motion.p>
            </div>
            <motion.div className='flex lg:flex-nowrap md:flex-wrap flex-wrap gap-10 mt-20'
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {
                    news1.map((item, index) => (
                        <motion.div key={index} className='flex lg:flex-nowrap md:flex-wrap flex-wrap items-center'
                            variants={card}
                        >
                            <div className='lg:w-3/6 md:w-full w-full lg:h-72 md:h-96 h-80 '>
                                <img src={item.img} alt="" className=' w-full h-full lg:object-cover md:object-cover object-cover' loading='lazy' />
                            </div>
                            <div className='text-left w-4/6 lg:ps-4 md:py-5 py-5'>
                                <h3 className='font-Main text-2xl'>{item.heading}</h3>
                                <p className='font-primary text-base text-slate-400 my-2'>{item.date}</p>
                                <p className='font-primary text-base  text-slate-400'>{item.content}</p>
                                <button className='mt-2 font-primary text-[#D74452] hover:text-stone-300 duration-500 text-base flex items-center gap-4 tracking-wider '>Read More
                                    <BsArrowRight />
                                </button>
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>

            <motion.div className='flex lg:flex-nowrap md:flex-wrap flex-wrap gap-10 mt-10'
                variants={container}
                initial="hidden"
                whileInView="visible"
            // viewport={{ once: true }}
            >
                {
                    news2.map((item, index) => (
                        <motion.div key={index} className='flex lg:flex-nowrap md:flex-wrap flex-wrap items-center'
                            variants={card}
                        >
                            <div className='lg:w-3/6 md:w-full w-full lg:h-72 md:h-96 h-80'>
                                <img src={item.img} alt="" className=' w-full h-full lg:object-cover md:object-cover' loading='lazy' />
                            </div>
                            <div className='text-left w-4/6 lg:ps-4 md:py-5 py-5'>
                                <h3 className='font-Main text-2xl'>{item.heading}</h3>
                                <p className='font-primary text-base text-slate-400 my-2'>{item.date}</p>
                                <p className='font-primary text-base  text-slate-400'>{item.content}</p>
                                <button className='mt-2 font-primary text-[#D74452] hover:text-stone-300 duration-500 text-base flex items-center gap-4 tracking-wider '>Read More
                                    <BsArrowRight />
                                </button>
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>

        </div>
    )
}

export default News