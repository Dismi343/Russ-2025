import PhotoSlider from "../components/PhotoSilder";
import { useState,useEffect } from "react";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ConferenceSpeakers from "../components/ConferenceSpeakers";
import CountdownSection from "../components/Countdown";

function Home(){

    const [visible,setVisible]=useState(false);
    const[slide,setSlide]=useState(false);
    const[hr,setHr]=useState(false);

     useEffect(()=>{
           const timer=setTimeout(() => {
                setVisible(true);
                return visible;
           }, 300);
                return () => clearTimeout(timer);
    
        },[visible]);
        
        useEffect(()=>{
                const handlScroll=()=>{
                    const Scrollposition = window.scrollY + window.innerHeight;
                    const elementPosition = document.getElementById('st-section')?.offsetTop || 0
                            if(Scrollposition > elementPosition){
                                setSlide(true)
                            }else(
                                setSlide(false)
                            )
                    const hr=document.getElementById("hr")?.offsetTop||0
                    if(Scrollposition > hr){
                        setHr(true)
                    }else(
                                setHr(false)
                    )
                }
                window.addEventListener('scroll', handlScroll)
                handlScroll()
                return ()=>window.removeEventListener('scroll',handlScroll)
        },[])
        
    return (    
        <>
        <div className="w-full md:h-[850px] h-[350px]  flex justify-center center   " >
        <div className="md:flex w-full ">
            <div className={`w-full flex   transition-all duration-1500 ease-out delay-200  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="w-full md:h-[850px] h-[300px] text-center bg-cover bg-center bg-[url(./assets/aboutimg/Bg1.jpg)]  shadow-lg shadow-black/50 relative">
                {/* Gradient overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
                <div className="md:w-1/2 flex flex-col md:items-start pl-20 mt-10 relative z-20">
                    <h1 className={` font-inter font-[600] leading-none lg:text-[96px] md:text-[60px] text-[20px] text-white  mt-20 text-shadow-lg/30  transition-all duration-1500 ease-out delay-400  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>RUHUNA</h1>
                    <h3 className={` font-inter font-[600] lg:text-[96px] md:text-[60px] leading-none text-[20px] text-[#CC27FF]  md:block  text-shadow-lg/30  transition-all duration-1500 ease-out delay-500  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>INTERNATIONAL</h3>
                    <h3 className={` font-inter font-[600]  tracking-widest leading-none lg:text-[30px] md:text-[24px] text-[20px] text-white  md:block  text-shadow-lg/30  transition-all duration-1500 ease-out delay-500  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>UNDERGRADUATE SCIENCE SYMPOSIUM</h3>
                </div>
            </div>
            </div>
        </div>    
        </div>

        <div  className="flex-col items-center   ">
                    <h1 id='st-section' className={`font-semibold  lg:text-[40px] md:text-[32px] text-[18px] text-center transition-all duration-1500 ease-out delay-100 text-[20px]  ${slide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `} >Ruhuna Undergraduate Science Symposium</h1>
                    
                    <p id='st-section' className={`text-center px-10 mt-15 transition-all duration-1500 ease-out delay-100 text-[15px] md:text-[20px] ${slide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>RUSS 2025 is organized by the Faculty of Science, University of Ruhuna. This aims to provide a premier multidisciplinary forum for undergraduate researchers to present their research findings, innovations, practical challenges encountered and the solutions adopted in the fields of Science & Technology.</p>
        </div>
        
            <PhotoSlider/>
            <ConferenceSpeakers />
            
            <div className="w-full h-96 mt-30">
                <p className=" text-4xl text-center">Timeline will be added</p>
            </div>
            
                     <hr id='hr' className={`w-4/5 bg-blue-500 mx-auto my-6 transision-all duration-1500 ease-out delay-200 ${hr?' opacity-100 scale-100' : ' opacity-0 scale-0'}`} />
           
           
        <div className="w-full h-96 mt-30">
                
            </div>
        </>
    );
}

export default Home;