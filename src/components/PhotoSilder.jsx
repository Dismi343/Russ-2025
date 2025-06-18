
//import { useEffect, useState } from 'react';
import img1 from '../assets/aboutimg/Bg1.jpg';
import img2 from '../assets/aboutimg/Bg2.jpg';
import img3 from '../assets/aboutimg/Bg3.jpg';




function PhotoSlider(){
  

    const img=[
        {id:1, src:`${img1}`,alt:'img1'},
        {id:2, src:`${img2}`,alt:'img2'},
        {id:3, src:`${img3}`,alt:'img3'},
       

    ];

    const duplicateImg=[...img,...img,...img,...img,...img,...img];

    return(
        <>

         <div className="relative  gap-4 hover:pause-animation overflow-hidden">
                <div className="flex gap-4 animate-scrollL mt-10 animate-none">
                    {duplicateImg.map((image,index) => (
                    <div
                    key={index}
                    data-id={image.id}
                    className={`
                        flex-shrink-0  md:w-96 w-48  overflow-hidden rounded-lg shadow-lg
                    `}
                    >
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="md:h-[200px] w-full h-48  object-cover transition-transform duration-300  "
                        loading="lazy"
                        />
              </div>
            </div>
            

                ) )}
                </div>
         </div>
         
          <div className="relative  gap-4 hover:pause-animation overflow-hidden">
            <div className="flex gap-4 animate-scrollR mt-10  ">
                    {duplicateImg.map((image,index) => (
                    <div
                    key={index}
                    data-id={image.id}
                    className={`
                        flex-shrink-0  md:w-96 w-48  overflow-hidden rounded-lg shadow-lg
                    `}
                    >
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="md:h-[200px] w-full h-48  object-cover transition-transform duration-300 "
                        loading="lazy"
                        />
              </div>
            </div>
            

                ) )}
                </div>
          </div>

                      
        
        </>
    );
}
export default PhotoSlider;