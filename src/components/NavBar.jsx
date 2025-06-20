import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import {Menu,X} from 'lucide-react'
function NavBar(){

    const [isOpen,setIsOpen]=useState(false);
    const [visible,setVisible]=useState(false);

    const ToggleMenu=()=>{
        setIsOpen(!isOpen);

    }

    useEffect(()=>{
       const visible=setTimeout(() => {
            setVisible(true);
            return visible;
       }, 100);
            return () => clearTimeout(visible);

    },[]);
    
    return (
        <>
        {/* desktop view */}
       
        <nav className={`fixed w-full z-30 text-lg py-2 shadow-xl shadow-[#9685C6]/25 bg-white/75 hidden md:block `}>
            <Link  to="/" className={`ml-20 w-20 h-10    hover:duration-150 hover:underline  text-center mx-10 text-black transition-all duration-1500 ease-out  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} >Home</Link>
            <Link  to="/programm" className={` w-20 h-10    hover:duration-150 hover:underline  text-center mx-10 text-black transition-all duration-1500 ease-out  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>Program</Link>
            <Link  to="/team" className={` w-20 h-10    hover:duration-150 hover:underline  text-center mx-10 text-black transition-all duration-1500 ease-out  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>Team</Link>
           </nav> 
        
        

           {/* mobile view */}
            <nav className={`fixed top-0 left-0 w-full md:hidden z-30 transition-transform duration-500 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
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
                <Link to="/programm" className="w-20 h-10 text-center  mx-20 text-black">Program</Link>
                <Link to="/team" className="w-20 h-10 text-center  mx-20 text-black">Team</Link>
                 </div>   
                </div>
            </nav>

        </>
    );
}
export default NavBar;