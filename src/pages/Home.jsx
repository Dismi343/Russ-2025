import PhotoSlider from "../components/PhotoSilder";
import { useState,useEffect } from "react";
function Home(){

    const [visible,setVisible]=useState(false);

     useEffect(()=>{
           const timer=setTimeout(() => {
                setVisible(true);
                return visible;
           }, 100);
                return () => clearTimeout(timer);
    
        },[]);
        
    
    return (
        <>
        <div className="w-full md:h-[650px] h-[500px]  flex justify-center center  bg-cover bg-[#080A45] " >
        {/* <div className="w-full h-[900px] bg-black/50 absolute z-10 "></div> */}
        <div className="md:flex z-20  ">
            <div className={`md:w-1/2 flex items-center flex-col justify-center pl-10 transition-all duration-1500 ease-out delay-200  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="  font-semibold  lg:text-[80px] text-[60px] text-white text">RUSS 2025</h1>
                <h3 className=" lg:text-[60px] text-[40px] text-white ">Undergraduate Science Symposium</h3>
            </div>
               
                <div className={`md:w-1/2  flex items-center flex-col justify-center md:pl-40  transition-all duration-1500 ease-out delay-300  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="lg:w-80 lg:h-30 w-60 h-25 rounded-[50px] flex justify-center items-center text-white mt-30 bg-[#6E6094]  lg:text-3xl text-xl inset-shadow-sm inset-shadow-[#9685C6] animate- hover:animate-none">Coming Soon</div>
                </div>
        </div>
           
        </div>
             <PhotoSlider/>
        </>
    );
}

export default Home;