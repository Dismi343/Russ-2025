import { useState,useEffect } from "react";

const SpeakerCard=({member,slide})=>{
    return(

    <div className={`bg-white overflow-hidden w-full md:h-50 h-80  rounded-xl md:flex shadow-2xl  transition-all duration-1500 ease-out delay-400 ${slide? 'translate-y-0 opacity-100 scale-100':'translate-y-15 opacity-0 scale-0'} `}>
        <div className="md:w-1/2 flex items-center justify-center ">
            <img src={member.img} alt="test" className="md:w-40 md:h-40 w-35 h-35 rounded-full "/>
        </div>
            <div className="p-6 md:w-1/2 flex-col justify-center items-center ">
                <p className="text-gray-600  font-medium text-center mt-2">{member.position}</p>
                <h3 className="text-2xl font-bold text-gray-800 mb-1 text-center mt-4 mb-2">{member.name}</h3>
                <p className="text-gray-600 text-sm text-center">{member.department}</p>
                <p className="text-gray-600 text-sm text-center">{member.faculty}</p>
                <p className="text-gray-600 text-sm text-center">{member.university}</p>
            </div>
    </div>
    );
    
}


const ConferenceSpeakers=()=>{

    const [slide,setSlide]=useState(false);

    const speakers=[
        {id:1,
            position:"Plenatary speaker",
            name:"Pro. Inaka C.Perera",
            deparment:"Department of Zoology & Environemental Sciences",
            faculty:"Faculty of science",
            university:"University of Colombo",
            img:"https://www.sci.ruh.ac.lk/conference/RUSS2025/assets/speaker2-CaS0e7fT.jpeg"
        },
         {id:2,
            position:"Keynote speaker",
            name:"Pro. N.T.Perera",
            deparment:"Department of Chemistry",
            faculty:"Faculty of Applied science",
            university:"University of Sri Jayawardhanapura",
            img:"https://www.sci.ruh.ac.lk/conference/RUSS2025/assets/speaker1-BGSetdWG.jpeg"
        },
    ]

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
        <div id='confer-section' className={` shadow-2xl w-full p-10 bg-[#6F0790]  pb-30 transition-all duration-1500 ease-out delay-100 text-[20px] text-white  ${slide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}>
         <p className={`pt-8    text-center font-semibold text-[20px] md:text-[40px] transition-all duration-1500 ease-out delay-300 ${slide? 'translate-y-0 opacity-100 text-white scale-100':'-translate-y-40 opacity-0 text-black scale-50'} ` }>Meet the Conference Speakes</p>
        
        
        <div className="mt-15 grid grid-cols-1  gap-8 md:gap-20 md:grid-cols-2 ">
          {speakers.map((member) => (
            <SpeakerCard key={member.id} member={member} slide={slide} />
          ))}
        
        </div>
       
        </div>
         
        </>
    );
}



export default ConferenceSpeakers;