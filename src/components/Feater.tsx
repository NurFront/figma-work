import React from 'react'
import '../css/Feater.css'
import ins from '../img/IMAGE2.png'
import volna from '../img/icons/list1.png'
import listok from '../img/icons/listok.png'

const Feater = () => {
  return (
    <>
        <img className='volna' src={volna} alt="" />
        <img className='ins-img' src={ins} alt="" />
        <img className='listok' src={listok} alt="" />
        <img className='listok-2' src={listok} alt="" />
        <img className='listok-3' src={listok} alt="" />
        <h1 className='featered'>FEATURED COURSE</h1>
        <div className='decoretion'></div>
        <h1 className='run-online'>Run your own online learning platform</h1>
        <h1 className='branding'>A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.</h1>
        <h1 className='kathryn-name'>Kathryn Murphy</h1>
        <button className='learn-btn'>LEARN MORE</button>
        <h1 className='featered-2'>Featured Course</h1>
        <div className='decoretion-2'></div>
        <h1 className='lorem-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</h1>
        <button className='view-btn'>VIEW ALL COURSES</button>
        <div className='position-images'></div>
    </>
  )
}

export default Feater