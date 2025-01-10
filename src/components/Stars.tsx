import React from 'react'
import '../css/Stars.css'
import tochkaImage from '../img/icons/tochka.png'
import tochkaImage2 from '../img/icons/tochka2.png'

const Stars = () => {
    return (
        <div>
            <div className='stars-container'>
                <h1 className='stars'>
                    <h1 className="star-1">★</h1>
                    <h1 className="star-2">★</h1>
                    <h1 className="star-3">★</h1>
                    <h1 className="star-4">★</h1>
                    <h1 className="star-5">★</h1>
                </h1>
                <h1 className='kates'>“Kate’s courses are a game changer. She’s thorough, organized, and explains things in a no-nonsense way that makes it easy for anyone—beginners to experts—to learn something from her courses and take their game to the next level.”</h1>
                <h1 className='james-brown'>James Brown, Influencer</h1>
                <div className='tochka-container'>
                    <img className='tochka' src={tochkaImage2} alt="" />
                    <img className='tochka-2' src={tochkaImage} alt="" />
                </div>

            </div>

        </div>
    )
}

export default Stars