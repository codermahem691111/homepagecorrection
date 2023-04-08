import React from 'react'
import MCards from './images/cards.png'
import { FaBeer } from 'react-icons/fa';
import { AiOutlineFacebook } from 'react-icons/ai';
import {AiFillTwitterSquare } from 'react-icons/ai';
import {AiOutlineGooglePlus } from 'react-icons/ai';
import { FiLinkedin } from 'react-icons/fi';
import {AiOutlineYoutube} from 'react-icons/ai';
export const Footer = () => {
  return (
    <>
    <h1  className='text-3xl text-blue-900  text-center'>Hello fotter</h1>
    <div  className='mt-10 bg-sky-700' id='rowfooter1'>
      <div className='grid grid-cols-6 mt-10 ml-10 mr-10  xs:grid-cols-3 xs:bg-red-800 ' id='rowf1'>
         <div className='mt-10 mb-10'>
           <h2  className='text-2xl text-stone-400'>About us</h2>
           <h2  className='text-xs text-stone-400'>Why  homeo  clinic</h2> 
           <h2  className='text-xs text-stone-400'>Vision and mission</h2>
           <h2  className='text-xs text-stone-400'>Management Team</h2>
           <h2  className='text-xs text-stone-400'>Careears</h2>
           <h2  className='text-xs text-stone-400'>Media</h2> 
         </div>
         <div className='mt-10 mb-10'>
         <h2  className='text-2xl text-stone-400 '>Clinical Conditions</h2>
         <h2  className='text-xs text-stone-400'>Find Deases</h2> 
         <h2  className='text-xs text-stone-400'>Treatmentd</h2>
         <h2  className='text-xs text-stone-400'>Sucesses  Stories</h2>
         <h2  className='text-xs text-stone-400'>visuals</h2>
        
         </div>
        <div className='mt-10 mb-10'>
        <h2  className='text-2xl text-stone-400 '>Our  Doctors</h2>
        <h2  className='text-xs text-stone-400'>List Expert  Doctors</h2> 
        <h2  className='text-xs text-stone-400'>Become affiliate</h2>
         
         </div>
         <div className='mt-10 mb-10'>
         <h2  className='text-2xl text-stone-400 '> Homeopathy</h2>
         <h2  className='text-xs text-stone-400'>Why HomeoPathy</h2> 
         <h2  className='text-xs text-stone-400'>Benifits of Homepathy</h2>
         <h2  className='text-xs text-stone-400'>FAQ about  Homeopathy</h2>
         <h2  className='text-xs text-stone-400'>Make a decision</h2>
        
         
         
         
         </div>
         <div className='mt-10 mb-10'>   <h2  className='text-2xl text-stone-400'>Coorporate corner</h2>
         <h2  className='text-xs text-stone-400'>Coorporate</h2> 
         <h2  className='text-xs text-stone-400'>Benifits of Homepathy</h2>
         <h2  className='text-xs text-stone-400'>Make  a decions</h2></div>
         <div>
         
         <div className='mt-10 mb-10'>   <h2  className='text-2xl text-stone-400 '>Coorporate corner</h2>
         <h2  className='text-xs text-stone-400'>Coorporate</h2> 
         <h2  className='text-xs text-stone-400'>Benifits of Homepathy</h2>
         <h2  className='text-xs text-stone-400'>Make  a decions</h2>
         </div>
         
         </div>
      </div>
</div> 
 <hr  className=''></hr>

  <div className='grid grid-cols-3 pl-10 pr-10  bg-sky-700 '  id='rowfooter2'>
  <div className='mt-10'>
  <h2 className='text-2xl'>100% secure payments</h2>
  <h2>all major cards are accepted</h2>
  <img  src={MCards}></img>
  </div>
  
     <div className='flex flex-row  mt-10'>
     <FaBeer />
     <AiOutlineFacebook/>
     <AiFillTwitterSquare size='2rem' color='blue'/>
     <AiOutlineGooglePlus size='3rem'  color='blue' />
     <FiLinkedin/>
     <AiOutlineYoutube/>
     </div>
    <div className='flex flex-row mt-10'>
    <h2 className='text-2xl xs:text-xl'>terms  and conditions</h2>
    <h2 className='text-2xl  xs:text-xl'>privacy policy</h2>
    </div>
</div>
  <hr></hr>
   <h2 className='text-2xl text-center bg-sky-700 pt-10 pb-10 text-stone-400 '>@Developed By Maheem@</h2>

    </>
  )
}
