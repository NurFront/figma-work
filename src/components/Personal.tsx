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
            <div className='upcomming-container'>
                <h1 className='upcomming-title'>Upcoming Free Workshops</h1>
                <div className="decoretion-5"></div>
                <h1 className='lorem-text-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</h1>
                <button className='view-btn-2'>VIEW ALL WORKSHOPS</button>
                <div className='description-container'>
                    <div><h1 className='description-ttile-lorem'>Photography Basics</h1><h1 className='description-text-lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.</h1><h1 className='description-learn-lorem'>LEARN MORE</h1></div>
                    <div><h1 className='description-ttile-lorem'>Business 101</h1><h1 className='description-text-lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.</h1><h1 className='description-learn-lorem'>LEARN MORE</h1></div>
                    <div><h1 className='description-ttile-lorem'>Social Networking Camp</h1><h1 className='description-text-lorem'>Lorem ipsum dolor sit amet, consectet adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.</h1
                    ><h1 className='description-learn-lorem'>LEARN MORE</h1></div>
                </div>
            </div>
        </>
    )
}

export default Personal