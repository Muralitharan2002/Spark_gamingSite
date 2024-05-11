import React from 'react'
import gow from '../Assets/gow5.jpg'
import { BsArrowRight } from "react-icons/bs";


function Story() {
    return (
        <div className='bg-black flex items-center justify-center lg:flex-nowrap flex-wrap-reverse text-stone-300 px-2 py-20 -mt-1'>
            <div className='lg:w-2/4 md:w-4/5 w-full p-2 '>
                <img src={gow} alt="God Of War" className='w-full' />
                <div className='bg-[#D74452] border border-[#D74452] hover:bg-black duration-500 cursor-pointer  py-3 font-primary text-xl mt-10 text-center lg:mx-20'>
                    Download Game
                </div>
            </div>
            <div className='xl:w-7/12 md:w-3/6  mx-2 layout '>
                <h3 className='font-Main lg:text-5xl md:text-5xl text-4xl'>
                    The Background <br /> Story
                </h3>
                <p className='font-Main text-3xl text-[#D74452] mt-16'>
                    Bloodborne - First Try!
                </p>
                <div className='font-primary mt-10 text-slate-400'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dosertakle eiusmod tempor incididunt ut labore et dolore magna aliqua. Miker veniam, quis nostrud exercitation ullamco laboris. Sed ut perspi ciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam.</p>
                    <br />
                    <p> Miker veniam, quis nostrud exercitation ullamco laboris. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam aperiam. Lorem ipsum dolor sit amet consectetur adipiscing elit…..</p>
                </div>
                <button className='mt-9 font-primary text-[#D74452] hover:text-stone-300 duration-500 text-lg flex items-center gap-4 tracking-wider '>Read More
                    <BsArrowRight />
                </button>
            </div>
        </div>
    )
}

export default Story