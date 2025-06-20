import { useState,useEffect } from "react";
function ConferenceSpeakers(){

    const [slide,setSlide]=useState(false);



      useEffect(()=>{
                    const handlScroll=()=>{
                        const Scrollposition = window.scrollY + window.innerHeight;
                        const elementPosition = document.getElementById('confer-section')?.offsetTop || 0
                                if(Scrollposition > elementPosition){
                                    setSlide(true)
                                }else(
                                    setSlide(false)
                                )
                    }
                    window.addEventListener('scroll', handlScroll)
                    handlScroll()
                    return ()=>window.removeEventListener('scroll',handlScroll)
            },[])
    return(
        <>
        <div id='confer-section' className={` transition-all duration-1500 ease-out delay-100 text-[20px]  ${slide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}>
         <p>conference</p>
        </div>
       
        </>
    );
}
export default ConferenceSpeakers;