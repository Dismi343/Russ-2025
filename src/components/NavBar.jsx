import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import {Menu,X} from 'lucide-react'
import logo from '../assets/logo2.png';
function NavBar(){

    const [isOpen,setIsOpen]=useState(false);
    const [visible,setVisible]=useState(false);
    const location = useLocation();

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
       
        <nav className={`fixed w-full z-30 text-lg py-3  shadow-xl shadow-[#9685C6]/25 bg-black/75 hidden md:block font-figtree `}>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link  to="/" className={`ml-10 w-10 h-10 hover:duration-150 hover:underline transition-all duration-1500 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} >
                        <img src={logo} alt="Logo" className="w-full h-full object-cover rounded" />
                    </Link>
                    <Link  to="/" className={`ml-4 hover:duration-150   text-center mx-10 text-white transition-all duration-1500 ease-out font-bold text-4xl  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} >RIUSS</Link>
                    <Link  to="/" className={`hover:duration-150 hover:underline  text-center mx-10 transition-all duration-1500 ease-out ${location.pathname === '/' ? 'text-[#CC27FF]' : 'text-white'} ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} >Home</Link>
                    <Link  to="/programm" className={`hover:duration-150 hover:underline  text-center mx-10 transition-all duration-1500 ease-out ${location.pathname === '/programm' ? 'text-[#CC27FF]' : 'text-white'} ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>Program</Link>
                    <Link  to="/author-instructions" className={`hover:duration-150 hover:underline  text-center mx-10 transition-all duration-1500 ease-out ${location.pathname === '/author-instructions' ? 'text-[#CC27FF]' : 'text-white'} ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>Instructions</Link>
                    <Link  to="/team" className={`hover:duration-150 hover:underline  text-center mx-10 transition-all duration-1500 ease-out ${location.pathname === '/team' ? 'text-[#CC27FF]' : 'text-white'} ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>Team</Link>
                    <Link  to="/sponsors" className={`hover:duration-150 hover:underline  text-center mx-10 transition-all duration-1500 ease-out ${location.pathname === '/sponsors' ? 'text-[#CC27FF]' : 'text-white'} ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>Sponsors</Link>
                </div>
                <button  className={`mr-10 w-40 h-10 bg-[#6F0790] hover:duration-150 rounded-3xl hover:cursor-pointer  text-center transition-all duration-1500 ease-out  text-white ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} onClick={()=>{console.log("clicked")}}>Register now</button>
            </div>
           </nav> 
        
        

           {/* mobile view */}
            <nav className={`fixed top-0  w-full md:hidden z-30 transition-transform duration-500 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                 <div className="w-100 h-10 bg-tranparent font-serif flex flex-row justify-end items-center flex px-6 mt-2">
                    <button 
                    onClick={ToggleMenu}
                    className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white m-2 shadow-lg`}
                    aria-label="Toggle menu"
                >
                     {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                 </div>
                  <div 
                className={`w-full bg- shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-85 opacity-100' : 'max-h-0 opacity-0'
                }`}
                >
                 <div className='flex flex-col items-center gap-4  text-white py-2 bg-black/75'>
                <Link to="/" className={`w-20 h-10 text-center mx-20 ${location.pathname === '/' ? 'text-[#CC27FF]' : 'text-white'}`} >Home</Link>
                <Link to="/programm" className={`w-20 h-10 text-center  mx-20 ${location.pathname === '/programm' ? 'text-[#CC27FF]' : 'text-white'}`}>Program</Link>
                <Link to="/author-instructions" className={`w-20 h-10 text-center  mx-20 ${location.pathname === '/author-instructions' ? 'text-[#CC27FF]' : 'text-white'}`}>Instructions</Link>
                <Link to="/team" className={`w-20 h-10 text-center  mx-20 ${location.pathname === '/team' ? 'text-[#CC27FF]' : 'text-white'}`}>Team</Link>
                <Link to="/sponsors" className={`w-20 h-10 text-center  mx-20 ${location.pathname === '/sponsors' ? 'text-[#CC27FF]' : 'text-white'}`}>Sponsors</Link>
                <button className="w-32 h-10 bg-[#6F0790] hover:duration-150 rounded-3xl hover:cursor-pointer text-center mx-20 text-white" onClick={()=>{console.log("clicked")}}>Register now</button>
                 </div>   
                </div>
            </nav>

        </>
    );
}
export default NavBar;