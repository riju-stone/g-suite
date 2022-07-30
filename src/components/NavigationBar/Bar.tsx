import React, { useState } from 'react'
import GDrive from "../../assets/gdrive.png"
import GDocs from "../../assets/gdocs.png"
import GSheets from "../../assets/gsheets.png"
import GSlides from "../../assets/gslides.png"
import GForms from "../../assets/gforms.png"
import GCalendar from "../../assets/gcalendar.png"
import GKeep from "../../assets/gkeep.png"

import { motion } from "framer-motion"
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md"

interface MenuStateProps
{
    menuState: boolean,
    setMenuState: (menuState: boolean) => void
}

const NavigationBar = ({ menuState, setMenuState }: MenuStateProps) =>
{

    const menuVariant = {
        open: {
            y: 0,
            transition: { duration: 0.4 }
        },
        closed: {
            y: 60,
            transition: { duration: 0.4 }
        },
    }

    return (
        <motion.div variants={menuVariant} animate={menuState === true ? 'closed' : "open"}
            className="flex flex-col justify-center items-center align-middle 
            bg-black rounded-t-xl shadow-2xl backdrop-blur-md bg-opacity-10 ">
            <div className="rounded-t-md h-[16.4999px] absolute -top-4 bg-black backdrop-blur-md bg-opacity-10">
                <button className="px-2 mb-4" onClick={() => setMenuState(!menuState)}>
                    {menuState === true ? <MdOutlineKeyboardArrowUp className='text-[#2b2b2b]' /> : <MdOutlineKeyboardArrowDown className='text-[#2b2b2b]' />}
                </button>
            </div>
            <div className="flex flex-row h-[70px] w-[485px]" >
                <button className="mx-8"><img className="absolute bottom-3 w-10 h-10" src={GDrive} alt="" /></button>
                <button className="mx-8"><img className="absolute bottom-3 w-10 h-10" src={GKeep} alt="" /></button>
                <button className="mx-8"><img className="absolute bottom-3 w-10 h-10" src={GCalendar} alt="" /></button>
                <button className="mx-8"><img className="absolute bottom-3 w-10 h-10" src={GDocs} alt="" /></button>
                <button className="mx-8"><img className="absolute bottom-3 w-10 h-10" src={GSheets} alt="" /></button>
                <button className="mx-8"><img className="absolute bottom-3 w-10 h-10" src={GSlides} alt="" /></button>
                <button className="mx-8"><img className="absolute bottom-3 w-10 h-10" src={GForms} alt="" /></button>
            </div>
        </motion.div>
    )
}

export default NavigationBar