import React from 'react'
import image1 from '../images/image-sliders__image1.png'
import image2 from '../images/image-slider__image2.png'
import image3 from '../images/image-sliders__image3.png'
import image4 from '../images/image-sliders__image4.png'
import image5 from '../images/image-sliders__image5.png'
const ImageSlider = () => {
    return (
        <>
            <section className='imageSlider'>
                <div className='imageSlider__images'>
                    <img src={image5} className='imageSlider__image' alt='slider'/>
                    <img src={image4} className='imageSlider__image' alt='slider'/>
                    <img src={image3} className='imageSlider__image' alt='slider'/>
                    <img src={image2} className='imageSlider__image' alt='slider'/>
                    <img src={image1} className='imageSlider__image' alt='slider'/>
                </div>
            </section>
        </>
    )
}
export default ImageSlider