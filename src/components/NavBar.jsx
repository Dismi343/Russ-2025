import { Link } from 'react-router-dom'
import { useState } from 'react';
import {Menu,X} from 'lucide-react'
function NavBar(){

    const [isOpen,setIsOpen]=useState(false);

    const ToggleMenu=()=>{
        setIsOpen(!isOpen);
    }

    
    return (
        <>
        {/* desktop view */}
         <nav className={`fixed  z-30 px-10  text-xl   py-4 shadow-xl shadow-[#9685C6]/25  border rounded-full mx-10 bg-white/50 hidden md:block`}>
            <Link to="/" className=" w-20 h-10    hover:duration-150 hover:text-[#E2AFAA]  text-center mx-20 text-white" >Home</Link>
            <Link to="/programm" className="w-20 h-10  hover:duration-150 hover:text-[#E2AFAA] text-center  mx-20 text-white">Programm</Link>
            <Link to="/team" className="w-20 h-10  hover:duration-150 hover:text-[#E2AFAA] text-center  mx-20 text-white">Team</Link>
           </nav> 

           {/* mobile view */}
            <nav className='fixed top-0 left-0 w-full md:hidden z-30'>
                 <div className="w-100 h-10 bg-tranparent font-serif flex flex-row justify-end items-center flex px-6 ">
                    <button 
                    onClick={ToggleMenu}
                    className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
                    aria-label="Toggle menu"
                >
                     {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                 </div>
                  <div 
                className={`w-full bg- shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
                >
                 <div className='flex flex-col items-center gap-4  text-black py-2 bg-white/75'>
                  <Link to="/" className=" w-20 h-10 text-center mx-20 text-black" >Home</Link>
                <Link to="/programm" className="w-20 h-10 text-center  mx-20 text-black">Programm</Link>
                <Link to="/team" className="w-20 h-10 text-center  mx-20 text-black">Team</Link>
                 </div>   
                </div>
            </nav>

        </>
    );
}
export default NavBar;