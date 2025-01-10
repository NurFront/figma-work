import React from 'react'
import '../css/Articles.css'
import tiktokerImage from '../img/TIKTOKER.png'
import mobig from '../img/MOBILOGRAPH.png'

const Articles = () => {
  return (
    <>
      <div className='articles-container'>
        <h1 className='recent-articles'>Recent Articles</h1>
        <div className="decoretion-7"></div>
        <h1 className='articles-lorem-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</h1>
        <button className='articles-btn'>VIEW ALL ARTICLES</button>
        <div className='articles-images'>
          <img className='tiktko-img' src={tiktokerImage} alt="" />
          <img className='tiktko-img' src={tiktokerImage} alt="" />
          <img className='tiktko-img' src={mobig} alt="" />
        </div>

        <div className='data-img'>
          <h1>February 8, 2021</h1>
          <h1>February 8, 2021</h1>
          <h1>January 31, 2021</h1>
        </div>

        <div className='title-img'>
          <h1 className='title-img-text-1'>The TikTok Algorithm: How to Get the Best Engagement</h1>
          <h1 className='title-img-text-2'>How to Win Friends and Influence People</h1>
          <h1 className='title-img-text-3'>iPhone Photography: Tips, Tricks, and Best Practices</h1>
        </div>
        
        <div className='name-avtor-articles-container'>
            <h1 className='name-avtor-articles-1'>Dianne Russell</h1>
            <h1 className='name-avtor-articles-2'>Marvin McKinney</h1>
            <h1 className='name-avtor-articles-4'>Katie Murphy</h1>
        </div>
      </div>

    </>
  )
}

export default Articles