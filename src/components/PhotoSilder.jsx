
//import { useEffect, useState } from 'react';
import img1 from '../assets/Infocur/img1.jpg';
import img2 from '../assets/Infocur/img2.jpg';
import img3 from '../assets/Infocur/img3.jpg';
import img4 from '../assets/Infocur/img4.jpg';
import img5 from '../assets/Infocur/img5.jpg';
import img6 from '../assets/Infocur/img6.jpg';
import img7 from '../assets/Infocur/img7.jpg';
import img8 from '../assets/Infocur/img8.jpg';
import img9 from '../assets/Infocur/img9.jpg';
import img10 from '../assets/Infocur/img10.jpg';
import img11 from '../assets/Infocur/img11.jpg';
import img12 from '../assets/Infocur/img12.jpg';
import img13 from '../assets/Infocur/img13.jpg';




function PhotoSlider(){
 
    const img=[
        {id:1, src:`${img1}`,alt:'img1'},
        {id:2, src:`${img2}`,alt:'img2'},
        {id:3, src:`${img3}`,alt:'img3'},
        {id:4, src:`${img4}`,alt:'img4'},
        {id:5, src:`${img5}`,alt:'img5'},
        {id:6, src:`${img6}`,alt:'img6'},
        {id:7, src:`${img7}`,alt:'img7'},
        {id:8, src:`${img8}`,alt:'img8'},
        {id:9, src:`${img9}`,alt:'img9'},
        {id:10, src:`${img10}`,alt:'img10'},
        {id:11, src:`${img11}`,alt:'img11'},
        {id:12, src:`${img12}`,alt:'img12'},
        {id:13, src:`${img13}`,alt:'img13'},
       

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