import React, { useEffect, useState } from 'react'
import logo from '../Assets/logo.png'
import { NavLink } from 'react-router-dom';
import { TbSearch } from "react-icons/tb";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { SlArrowRight } from "react-icons/sl";
import "../style/style.css"


function Header() {
    const [lastScroll, setLastScroll] = useState(0)
    const [visible, setVisible] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    const [menu1, setMenu1] = useState(false)
    const [menu2, setMenu2] = useState(false)



    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    })

    const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        setVisible(lastScroll > currentScroll || currentScroll < 10);
        setLastScroll(currentScroll)
    }



    return (
        <div className={`z-30 sticky flex justify-between items-center lg:px-20 px-3 lg:py-0 md:py-5 py-3 border-b border-b-slate-400 backdrop-blur transition-all ease-out duration-500 ${visible ? "top-0" : "hide"}`}>
            <div className='  lg:text-4xl text-2xl font-Main font-bold flex items-center gap-2 z-40'>
                <img src={logo} alt="spark logo" className='lg:w-10 w-8' />
                <p>SPARK</p>
            </div>
            <div className={`absolute lg:hidden ${sidebar ? "" : "hidden"} top-0 left-0 w-full h-screen bg-[#000003b4] z-30`} onClick={() => setSidebar(false)}></div>
            <div className={` mobile-menu font-primary text-base lg:relative absolute top-0 lg:left-0 transition-all duration-300 ${sidebar ? "left-0" : "-left-72"} lg:h-auto h-screen lg:w-auto w-72 lg:bg-inherit bg-[#000003cb] lg:py-0 lg:px-0 py-28 px-5 z-30`} >

                {/* <IoIosCloseCircleOutline className='lg:hidden absolute right-0' /> */}

                <ul className='lg:flex gap-16 lg:space-y-0 space-y-10'>
                    <li className='lg:py-5'>
                        <NavLink to={""} className="hover:text-[#D74452] duration-500">HOME</NavLink>
                    </li>
                    <li className='lg:py-5'>
                        <NavLink to={""} className="hover:text-[#D74452] duration-500 ">ABOUT</NavLink>
                    </li>
                    <li className="lg:py-5 menu-item duration-500" onMouseOver={() => setMenu1(true)} onMouseLeave={() => setMenu1(false)}>
                        <NavLink to={""} className="duration-500 flex items-center gap-2 main-menu">GAMES <SlArrowRight className='duration-500 text-xs arrow' /></NavLink>
                        <ul className={`lg:absolute duration-500 ${menu1 ? "" : "hidden"} top-16 lg:bg-[#0E0D1B] px-4 py-3 space-y-3 w-60`}>
                            <li>
                                <NavLink to={""} className="hover:text-[#D74452] duration-500">GAMES</NavLink>
                            </li>
                            <li>
                                <NavLink to={""} className="hover:text-[#D74452] duration-500">GAMES DETAIL</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className='lg:py-5 menu-item' onMouseOver={() => setMenu2(true)} onMouseLeave={() => setMenu2(false)}>
                        <NavLink to={""} className="main-menu2 duration-500 flex items-center gap-2" >FEATURES <SlArrowRight className='duration-500 text-xs arrow' /></NavLink>
                        <ul className={`lg:absolute duration-500 ${menu2 ? "" : "opacity-0 hidden"} top-16 lg:bg-[#0E0D1B] px-4 py-3 space-y-3 w-60`}>
                            <li>
                                <NavLink to={""} className="hover:text-[#D74452] duration-500">TEAM</NavLink>
                            </li>
                            <li>
                                <NavLink to={""} className="hover:text-[#D74452] duration-500">FAQ</NavLink>
                            </li>
                            <li>
                                <NavLink to={""} className="hover:text-[#D74452] duration-500">NEWS</NavLink>
                            </li>
                            <li>
                                <NavLink to={""} className="hover:text-[#D74452] duration-500">SINGLE NEWS</NavLink>
                            </li>
                            <li>
                                <NavLink to={""} className="hover:text-[#D74452] duration-500">CONTACT</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className='flex items-center justify-center space-x-5'>
                <div className=' flex items-center text-2xl border rounded border-stone-300 duration-500 hover:border-[#D74452] p-2 backdrop-blur space-x-2 cursor-pointer'>
                    <TbSearch />
                    {/* <input type="text" className='bg-transparent font-primary outline-none ' /> */}
                </div>

                <HiMiniBars3BottomRight className=' text-4xl cursor-pointer lg:hidden menu-bar' onClick={() => setSidebar(true)} />
            </div>



        </div>
    )
}

export default Header