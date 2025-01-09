import React from 'react'
import '../css/Header.css'
import rectangleImage from '../img/rengle.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()

    const nav = () => {
        navigate('/admin')
    }

    return (
        <>
            <div className='header'>
                <div className='navbar'>
                    <a href="#">Courses</a>
                    <a href="#">Free Workshops</a>
                    <a href="#">Blog</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <button onClick={nav} className='nav-btn'>Admin</button>
                </div>
                <div className='images'>
                    <img className='rectangle-1' src={rectangleImage} alt="" />
                    <h1 className='skillz'>Skillz</h1>
                 </div>
                 <div>
                    <ShoppingCartIcon className='basket' />
                    <h1 className='circle'>0</h1>
                 </div>
            </div>

        </>
    )
}

export default Header