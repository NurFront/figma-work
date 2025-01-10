import React from 'react'
import '../css/Passion.css'
import girlImage from '../img/GIRLIMAGE.png'
import volnaImage from '../img/icons/list1.png'
import listochekImage from '../img/icons/listok.png'

const Passion = () => {
    return (
        <>
            <div className='passion-container'>
                <h1 className='teacher-title'>A Passion for Teaching</h1>
                <div className='pass-container'>
                    <img className='girl-img' src={girlImage} alt="" />
                </div>
                <div className='decoretion-4'></div>
                <h1 className='deep-dive'>A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.</h1>
                <button className='about-btn'>ABOUT SKILLZ</button>
            </div>
        </>
    )
}

export default Passion