import React from 'react'
import './cards.css'
import Cartoon1 from './images/cartoon1.svg'
import Cartoon2 from './images/cartoon1.svg'
import Cartoon3 from './images/cartoon1.svg'
export const Cards = () => {
  return (
    <>
     
  

    <div className=" grid grid-cols-4  gap-4 xs:grid-cols-2 text-center"  id='row1'>
    <div className=" " id='cardno1' data-aos="zoom-in-up" data-aos-duration="1000">
       <h1 className='text-center text-xl'>Our  Doctords</h1>
       <img className='text-center' src={Cartoon1} id='cartoon1' ></img>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
        <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
    </div>
   
    <div className="   " id='cardno1' data-aos="zoom-in-up" data-aos-duration="1000">
    <h1 className='text-center sm:basis-1/2 text-xl'>Our  Books</h1>
    <img className='text-center' src={Cartoon2} id='cartoon1' ></img>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
     <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
  </div>
  
  <div className="  " id='cardno1'  data-aos="zoom-in-up" data-aos-duration="1000">
  <h1 className='text-center text-xl'>Medicines</h1>
  <img className='text-center' src={Cartoon3} id='cartoon1' ></img>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
   <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
  </div>
  
  <div className="  " id='cardno1'  data-aos="zoom-in-up" data-aos-duration="1000">
  <h1 className='text-center text-xl'>Medicines</h1>
  <img className='text-center' src={Cartoon3} id='cartoon1' ></img>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
   <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
  </div>
  
  
  
  
  
  </div>
    
    
    </>
  )
}
