import React from 'react'
import '../css/Finish.css'
import allelementImage from '../img/Frame 2.png'

const Finish = () => {
  return (
    <>
        <div className='finish-container'>
            <div className='border-input'>EMAIL ADDRESS</div>
            <button className='submit-btn'>SUBMIT</button>
            <h1 className='finish-title'>You have the power to define your future.</h1>
        </div>
        <img className='all-img' src={allelementImage} alt="" />
        <h1 className='avtor-skillz'>© Skillz Template ⠀⠀⠀⠀⠀⠀Powered by Webflow</h1>
    </>
  )
}

export default Finish