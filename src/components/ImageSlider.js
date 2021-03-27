import React from 'react'
import './ImageSlider.css'

function ImageSlider({ animate }) {
    return (
        <img onLoad={() => animate()} onError={() => animate()} alt='food' className='slider-image' src='https://pixelstrobist.com/wp-content/uploads/2017/11/autumn_food_photography_0.jpg'/>
    )
}

export default ImageSlider
