import React from 'react'
import { FaPlay } from "react-icons/fa";
import { BsChevronDoubleDown } from "react-icons/bs";

function Home() {
    return (
        <div className='text-center py-40 px-3 -mt-20'>
            <div className='gap-4 flex items-center flex-col '>
                <div className=' text-stone-300 lg:text-3xl md:text-3xl text-3xl font-Main tracking-wide my-3'>World of Myth and Mystery</div>
                <div className=' text-[#D74452] font-Main uppercase tracking-wide lg:text-7xl md:text-6xl text-5xl'>
                    God of War Ragnarö
                </div>
                <div className='text-stone-300 lg:text-xl md:text-lg text-lg font-primary space-y-2 my-3'>
                    <p className='leading-relaxed'>Experience the Epic Journey of Kratos and Atreus. <br />
                        Embark on a breathtaking adventure filled with gods, monsters, and Norse mythology.</p>
                </div>

                <div className='mt-20 p-5 replus rounded-full text-xl border-2 border-[#D74452] shadow hover:shadow-lg'>
                    <FaPlay />
                </div>

                <div className='text-xl font-primary'>Play Quake</div>
                <div className='mt-40 animate-bounce'>
                    <BsChevronDoubleDown className=' text-5xl text-[#D74452]' />
                </div>
            </div>


        </div>
    )
}

export default Home