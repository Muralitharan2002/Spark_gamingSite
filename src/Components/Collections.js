import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import game1 from "../Assets/game1.png"
import lou from "../Assets/lastofus.png"
import alan_wake from "../Assets/alan_wake.png"
import creed from "../Assets/creed.webp"
import forizon from "../Assets/forizon.jpg"

function Collections() {

    const games = [
        {
            "site": "STEAM, XBOX",
            "pic": lou,
            "name": "Last of Us",
            "price_inr": 2999,
            "genre": "Adventure",
            "about": "The Last of Us is a post-apocalyptic action-adventure game set in a world overrun by mutated creatures. Players control Joel, a smuggler tasked with escorting a teenage girl, Ellie, across the United States."
        },
        {
            "site": "STEAM, UPLAY",
            "pic": creed,
            "name": "Assassin's Creed",
            "price_inr": 2499,
            "genre": "Action",
            "about": "Assassin's Creed is an action-adventure game series that follows the centuries-long conflict between the Assassin Brotherhood and the Templar Order. Players explore historical settings and engage in stealthy assassinations and open-world exploration."
        },
        {
            "site": "XBOX, UPLAY",
            "pic": forizon,
            "name": "Forza Horizon",
            "price_inr": 3499,
            "genre": "Racing",
            "about": "Forza Horizon is an open-world racing game set in various locations around the world. Players compete in races, challenges, and events while exploring the expansive game world."
        },
        // {
        //     "site": "STEAM, UPLAY",
        //     "pic": red,
        //     "name": "Red Dead Redemption II",
        //     "price_inr": 3999,
        //     "genre": "Action",
        //     "about": "Red Dead Redemption II is a Western-themed action-adventure game set in the late 1800s. Players control Arthur Morgan, an outlaw and member of the Van der Linde gang, as they navigate the wild west and the changing landscape of America."
        // },
        // {
        //     "site": "XBOX ONE, UPLAY",
        //     "pic": gta_5,
        //     "name": "GTA V",
        //     "price_inr": 2499,
        //     "genre": "Adventure",
        //     "about": "Grand Theft Auto V is an action-adventure game set in the fictional state of San Andreas. Players can switch between three protagonists as they complete missions, explore the open world, and engage in various criminal activities."
        // },
        {
            "site": "STEAM, XBOX",
            "pic": alan_wake,
            "name": "Alan Wake",
            "price_inr": 1999,
            "genre": "Horror",
            "about": "Alan Wake is a psychological horror game that follows the story of a bestselling thriller novelist who becomes trapped in a nightmare inspired by his own works. Players must uncover the truth behind the mysterious events while battling dark forces."
        },
        // {
        //     "site": "STEAM, XBOX ONE",
        //     "pic": fc24,
        //     "name": "EA SPORTS FC™ 24",
        //     "price_inr": 2999,
        //     "genre": "Sports",
        //     "about": "EA SPORTS FC™ 24 is a sports simulation game that allows players to manage and control their own football (soccer) team. With realistic gameplay and management options, players can experience the thrill of leading their team to victory."
        // },
        // {
        //     "site": "STEAM, PLAYSTATION",
        //     "pic": Resident,
        //     "name": "Resident Evil 2",
        //     "price_inr": 3499,
        //     "genre": "Horror",
        //     "about": "Resident Evil 2 is a survival horror game set in the zombie-infested Raccoon City. Players control Leon Kennedy and Claire Redfield as they navigate the city, solving puzzles and battling hordes of the undead."
        // }
    ]

    return (
        <div className='bg-black text-stone-300 lg:py-40 md:py-40 py-36 -mt-1'>
            <div className=' lg:mx-24 mx-3'>

                <div className=' grid lg:grid-flow-col lg:place-items-center md:place-items-center  lg:gap-6 gap-9 pb-16 border-b-2 border-b-slate-800' >
                    <div className=' font-Main lg:text-4xl md:text-4xl text-3xl grid grid-cols-1 min-w-70'>
                        Pre-order digitally now - Play at launch
                    </div>
                    <div className=' flex items-center justify-between flex-wrap gap-9 '>
                        <div className='font-primary'>
                            <button className='border-2 border-[#D74452] hover:bg-[#D74452] duration-500 text-xl lg:px-8 px-6 lg:py-5 py-4 flex items-center gap-4 tracking-wider'>Read More
                                <BsArrowRight />
                            </button>
                        </div>
                        <div className=''>
                            <div className='float-right pe-4'>
                                <img src={game1} alt="Game Violance" className='lg:w-12 w-12' loading='lazy' />
                            </div>
                            <div className=''>
                                <p className='lg:text-4xl md:text-3xl text-2xl font-Main '>Game Violence</p>
                                <p className=' lg:w-72 md:w-72 w-[270px] text-slate-400'>Lorem ipsum dolor sit amet consecitera tetur adipiscing elit darelum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-stone-300 pt-36 px-4'>
                <div className=' text-center'>
                    <h3 className='font-Main lg:text-6xl text-4xl  mb-5'> Latest Games Releases</h3>
                    <p className='font-primary text-lg text-slate-400'>GAMES COLLECTION</p>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center gap-10 lg:mx-3 md:mx-10 xs:mx-5  mt-20'>
                    {
                        games.map((item, index) => (
                            <div className='lg:w-full md:w-full sm:w-5/6 card' key={index}>
                                <div className=''>
                                    <img src={item.pic} alt="last of us" loading='lazy' className='h-96 w-full brightness-75 saturate-50 duration-500 effect' />
                                </div>
                                <div className='flex justify-end my-4'>
                                    <span className='bg-[#D74452] px-3 py-1 font-primary text-sm'>
                                        {item.genre}
                                    </span>
                                </div>
                                <div>
                                    <h3 className='text-3xl font-Main mb-4'>{item.name}</h3>
                                    <p className='font-primary text-lg text-slate-400 mb-4'>"Experience the gripping narrative and intense action of The Last of Us games - masterpieces of storytelling and gameplay."</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='font-primary'>
                                        <p className='flex items-center gap-2'><IoGameController className='text-[#D74452]' />{item.site}</p>
                                    </div>
                                    <div className='font-primary text-2xl'>
                                        &#8377; {item.price_inr}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Collections