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
        <div className="w-full md:h-[700px] h-[600px]  flex justify-center center   " >
       
        <div className="md:flex w-full ">
            <div className={`md:w-1/2 flex  items-center flex-col justify-center  transition-all duration-1500 ease-out delay-200  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="w-full md:h-[450px] h-[300px]  flex-col justify-center items-center text-center bg-cover bg-center bg-[url(./assets/aboutimg/Bg2.jpg)] rounded-r-3xl shadow-lg shadow-black/50 ">
             {/* <div className="w-full md:h-[350px] h-[300px] bg-black/50 absolute z-10 rounded-r-3xl"></div> */}
                <h1 className={`font-bold  lg:text-[80px] text-[60px] text-white mt-10 mt-20 text-shadow-lg/30  transition-all duration-1500 ease-out delay-400 transition-all duration-1500 ease-out delay-200  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}>RUSS 2025</h1>
                <h3 className={` lg:text-[30px] text-[20px] text-white mt-8 md:block text-center text-shadow-lg/30  transition-all duration-1500 ease-out delay-500  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>RUHUNA UNDERGRADUATE SCIENCE SYMPOSIUM</h3>
            </div>
               
            </div>

            <div className={`md:w-1/2 flex items-center flex-col justify-center  `}>
                <span className="mb-10 lg:mt-0 mt-15">
                    <p className={`transition-all duration-1500 ease-out delay-400 text-[20px] ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>"Research for shaping the future"</p>
                </span>
                <span className="flex justify-center text-center">
                    <p className={`transition-all duration-1500 ease-out delay-600  text-[20px]  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <CalendarMonthOutlinedIcon/>  Held on: coming soon 
                        <br/>
                        
                            <LocationOnOutlinedIcon/> Location: Faculty of Science, University of Ruhuna
                        
                       
                    </p>
                </span>
                
                <div className={`lg:mt-10 mt-5 transition-all duration-1500 ease-out delay-700 text-[20px]  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                    {/* <button className="w-35 h-10  hover:scale-110  bg-[#6E6094] hover:bg-[#392b67] text-white  rounded-xl transition-all duration-400">Proceed</button> */}
                    <CountdownSection/>
                </div>

            </div>
               
                {/* <div className={`md:w-1/2 flex items-center flex-col justify-center  transition-all duration-1500 ease-out delay-300  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="lg:w-80 lg:h-30 w-60 h-25 rounded-[50px] flex justify-center items-center text-white bg-[#6E6094]  lg:text-3xl text-xl inset-shadow-sm inset-shadow-[#9685C6] animate- hover:animate-none mt-10">Coming Soon</div>
                </div> */}
        </div>    
        </div>

        <div  className="flex-col items-center mt-20  ">
                    <h1 id='st-section' className={`font-semibold  lg:text-[40px] text-[18px] text-center transition-all duration-1500 ease-out delay-100 text-[20px]  ${slide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `} >Ruhuna Undergraduate Science Symposium</h1>
                    
                    <p id='st-section' className={`text-center px-10 mt-15 transition-all duration-1500 ease-out delay-100 text-[15px] md:text-[20px] ${slide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>RUSS 2025 is organized by the Faculty of Science, University of Ruhuna. This aims to provide a premier multidisciplinary forum for undergraduate researchers to present their research findings, innovations, practical challenges encountered and the solutions adopted in the fields of Science & Technology.</p>
        </div>
        
            <PhotoSlider/>
            <ConferenceSpeakers />
            
            <div className="w-full h-96 mt-30">
                <p className=" text-4xl text-center">Timeline will be added</p>
            </div>
            
                     <hr id='hr' class={`w-4/5 bg-blue-500 mx-auto my-6 transision-all duration-1500 ease-out delay-200 ${hr?' opacity-100 scale-100' : ' opacity-0 scale-0'}`} />
           
           
        <div className="w-full h-96 mt-30">
                
            </div>
        </>
    );
}

export default Home;