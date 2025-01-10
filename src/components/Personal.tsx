import React from 'react'
import '../css/Personal.css'
import personalImage from '../img/IMAGE.png'

const Personal = () => {
    return (
        <>
            <div className="decoretion-3"></div>
            <div className='personal-container'>
                <img className='personal-img' src={personalImage} alt="" />
                <h1 className='get-personal'>Get personalized learning recommendations</h1>
                <h1 className='lorem-text-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urnaLorem ipsum dolor sit amet.</h1>
                <button className='contuct-btn'>CONTACT US</button>
            </div>
        </>
    )
}

export default Personal