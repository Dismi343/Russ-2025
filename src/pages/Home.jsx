import { useState,useEffect } from "react";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ConferenceSpeakers from "../components/ConferenceSpeakers";
import Alawaththa from '../assets/otherImg/Alawaththa.jpg';
import Bg1 from '../assets/aboutimg/Bg1.jpg';
import Bg2 from '../assets/aboutimg/Bg2.jpg';
import Bg3 from '../assets/aboutimg/Bg3.jpg';

function Home(){

    const [visible,setVisible]=useState(false);
    const[slide,setSlide]=useState(false);
    const[hr,setHr]=useState(false);
    const [visibleEx,setVisibleEx]=useState(false);
    const [currentBgIndex, setCurrentBgIndex] = useState(0);
    
    // Array of background images
    const backgroundImages = [Bg1, Bg2, Bg3];

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

        useEffect(()=>{
            const handlScroll=()=>{
                    const Scrollposition = window.scrollY
                    console.log(Scrollposition)
                    if(Scrollposition>=188){
                        setVisibleEx(true);
                    }
                    else{
                        setVisibleEx(false);
                    }
            }
            window.addEventListener('scroll', handlScroll)
            handlScroll();
        })

        // Background image cycling effect
        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentBgIndex((prevIndex) => 
                    (prevIndex + 1) % backgroundImages.length
                );
            }, 5000); // Change image every 4 seconds

            return () => clearInterval(interval);
        }, [backgroundImages.length]);
        
    return (    
        <>
        <div className="w-full md:h-[700px] h-[550px]  flex justify-center center  bg-[#D9D9D9] " >
        <div className="md:flex w-full ">
            <div className={`w-full flex   transition-all duration-1500 ease-out delay-200  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div 
                className="w-full md:h-[700px] h-[550px] text-center bg-cover bg-center shadow-lg shadow-black/50 relative transition-all duration-2000 ease-in-out"
                style={{ backgroundImage: `url(${backgroundImages[currentBgIndex]})` }}
            >
                {/* Gradient overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
                <div className="md:w-1/2 flex flex-col md:items-start items-center md:pl-20 mt-20 relative z-20">
                    <h1 className={` font-inter font-[600] leading-none lg:text-[96px] md:text-[60px] text-[40px] text-white  md:mt-20 text-shadow-lg/30  transition-all duration-1500 ease-out delay-400  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>RUHUNA</h1>
                    <h3 className={` font-inter font-[600] lg:text-[96px] md:text-[60px] leading-none text-[40px] text-[#CC27FF]  md:block  text-shadow-lg/30  transition-all duration-1500 ease-out delay-500  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>INTERNATIONAL</h3>
                    <h3 className={` font-inter font-[600]  tracking-widest leading-none lg:text-[30px] md:text-[20px] text-[18px] text-white  md:block  text-shadow-lg/30  transition-all duration-1500 ease-out delay-500  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>UNDERGRADUATE SCIENCE SYMPOSIUM</h3>
                </div>
                <div className={`flex  lg:flex-row flex-col  md:mt-10 relative z-20 md:w-1/2 items-center md:pl-20 text-shadow-lg/30  transition-all duration-1500 ease-out delay-1000 mt-15 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                   <div className="  md:h-40  md:w-1/6 text-[#CC27FF] text-[30px] lg:text-[104px] font-figtree font-[600] items-center  flex md:mr-8 "><p className="ordinal ">12<sup className="text-[20px] md:text-[60px] align-super">th</sup></p></div>
                    <div className=" md:h-40  md:w-5/6 items-center text-center flex md:text-start "><p className=" text-white md:text-[25px] text-[18px] font-figtree font-[600] ml-4">NOVEMBER 2025 <br/> Faculty of Science, University of Ruhuna</p></div>
                </div>
                <div className={`flex  flex-row justify-center text-center md:justify-start  mt-6 relative z-20 md:w-1/2 md:pl-20 text-shadow-lg/30  transition-all duration-1500 ease-out delay-1500  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <p className="text-white md:text-xl text-lg font-figtree">"Research for shaping the future"</p>
                </div>
            </div>

              {/* Navigation dots - Desktop */}
              <div className="absolute bottom-8 right-0 md:flex hidden justify-center gap-2 z-10 mr-20">
                {backgroundImages.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentBgIndex(index)}
                    className={`w-3.5 h-3.5 rounded-full transition-colors shadow-lg shadow-black ${index === currentBgIndex ? 'bg-[#CC27FF]' : 'bg-white/50 hover:bg-white/70'}`}
                    aria-label={`Go to slide ${index + 1}`}
                />
                ))}
              </div>

              {/* Navigation dots - Mobile */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex md:hidden justify-center gap-2 z-10">
                {backgroundImages.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentBgIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors shadow-lg shadow-black ${index === currentBgIndex ? 'bg-[#CC27FF]' : 'bg-white/50 hover:bg-white/70'}`}
                    aria-label={`Go to slide ${index + 1}`}
                />
                ))}
              </div>
            </div>
        </div>    
        </div>

        <div  className="flex-col items-center bg-[#D9D9D9] ">
            
            {/* for medium screen */}
                  <div  className={`md:block hidden w-full md:h-[650px] h-[400px] md:pt-20 pt-10 md:px-20 px-4  md:flex mb-[400px] md:mb-20 transition-all duration-2000 ease-out delay-100 ${visibleEx ? 'translate-y-0 opacity-100 ' : 'translate-y-15 opacity-0 '}`}>
                        <div className="md:w-1/2 w-full h-full flex flex-col items-center text-center ">
                                <p className="md:text-[55px] text-[25px] font-figtree font-[600] mb-8 ">Experience the <span className="text-[#CC27FF]">Future</span> of Undergraduate Science.</p>
                                <p className="md:text-[25px] text-[15px] font-figtree font-[400]">RIUSS explores cutting-edge discoveries across key scientific domains - from pioneering sustainability solutions to the frontiers of data science. It fosters interdisciplinary collaboration and critical dialogue that shape the future of scientific inquiry. </p>
                                <p className="md:text-[30px]  text-[15px] font-figtree font-[400] text-[#6F0790] mt-4">Join us to share knowledge, build networks, and ignite your research journey on an international stage.</p>
                        </div>
                        <div className=" relative md:w-1/2 w-full h-full flex items-center justify-center px-8 md:px-0">
                                <div className="  md:w-[450px] md:h-[530px] h-full w-[280px] flex items-center justify-center bg-cover bg-center bg-[url(./assets/otherImg/Alawaththa.jpg)]   rounded-tl-4xl  rounded-br-4xl rounded-tr-lg rounded-bl-lg">                               
                                </div>
                                <div className=" absolute top-4 md:w-[450px] md:h-[530px] h-full w-[280px] border border-[#CC27FF] border-4  md:mt-10 ml-10 rounded-tl-4xl  rounded-br-4xl rounded-tr-lg rounded-bl-lg  px-8 md:px-0">
                                </div>
                        </div>
                    
                  </div>
                   {/* for small screen */}
                    <div  className={`md:hidden w-full h-[400px] pt-10  px-4   mb-[400px] md:mb-20 transition-all duration-2000 ease-out delay-2500 ${visible ? 'translate-y-0 opacity-100 ' : 'translate-y-15 opacity-0 '}`}>
                        <div className="md:w-1/2 w-full h-full flex flex-col items-center ">
                                <p className="md:text-[55px] text-[25px] font-figtree font-[600] mb-8 flex-col text-center ">Experience the <span className="text-[#CC27FF]">Future</span> of Undergraduate Science.</p>
                                <p className="md:text-[25px] text-[15px] font-figtree font-[400]">RIUSS explores cutting-edge discoveries across key scientific domains - from pioneering sustainability solutions to the frontiers of data science. It fosters interdisciplinary collaboration and critical dialogue that shape the future of scientific inquiry. </p>
                                <p className="md:text-[30px]  text-[15px] font-figtree font-[400] text-[#6F0790] mt-4">Join us to share knowledge, build networks, and ignite your research journey on an international stage.</p>
                        </div>
                        <div className=" relative md:w-1/2 w-full h-full flex items-center justify-center px-8 md:px-0">
                                <div className="  md:w-[450px] md:h-[530px] h-full w-[280px] flex items-center justify-center bg-cover bg-center bg-[url(./assets/otherImg/Alawaththa.jpg)]   rounded-tl-4xl  rounded-br-4xl rounded-tr-lg rounded-bl-lg">
                                </div>
                                <div className=" absolute top-4 md:w-[450px] md:h-[530px] h-full w-[280px] border border-[#CC27FF] border-4  md:mt-10 ml-10 rounded-tl-4xl  rounded-br-4xl rounded-tr-lg rounded-bl-lg  px-8 md:px-0">
                                </div>
                        </div>
                    
                    </div>
        
        
            <ConferenceSpeakers />
            
            <div className="w-full h-96 mt-30">
                <p className=" text-4xl text-center">Timeline will be added</p>
            </div>
            
                     <hr id='hr' className={`w-4/5 bg-blue-500 mx-auto my-6 transision-all duration-1500 ease-out delay-200 ${hr?' opacity-100 scale-100' : ' opacity-0 scale-0'}`} />
           
           
        <div className="w-full h-96 mt-30">
                
            </div>

            </div>
        </>
    );
}

export default Home;