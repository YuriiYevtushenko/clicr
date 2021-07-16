import React, {useState} from 'react'
import shoe1 from '../images/gallery_shoe1.png'
import shoe2 from '../images/gallery_shoe2.png'
import shoe3 from '../images/gallery_shoe3.png'
import shoe4 from '../images/gallery_shoe4.png'
import shoe5 from '../images/gallery_shoe5.png'
import shoe6 from '../images/gallery_shoe6.png'

const Gallery = () => {
    const shoeArr=[shoe1,shoe2,shoe3,shoe4,shoe5,shoe6]

    const [gallery,setGallery]=useState('shoe')
    return (
        <>
            <section className='gallery'>
                <div className='gallery__inner'>
                    <span className='gallery__title'>
                        Over 1,000,000 Photo Shot
                    </span>
                    <div className='gallery__tab'>
                        <button className={gallery==='food'?'gallery__button gallery__button--selected':'gallery__button'}  onClick={e=>setGallery('food')}>Food</button>
                        <button className={gallery==='shoe'?'gallery__button gallery__button--selected':'gallery__button'}   onClick={e=>setGallery('shoe')}>Shoe</button>
                        <button className={gallery==='camera'?'gallery__button gallery__button--selected':'gallery__button'}   onClick={e=>setGallery('camera')}>Camera</button>
                    </div>
                    <div className='gallery__image-wrap'>
                    {gallery==='shoe'?shoeArr.map((image,index)=>(
                        <img src={image} key={index} className='gallery__image' alt='logo'/>
                    )):null}
                    </div>
                    <button className='global__button gallery__button-portfolio'>View Portfolio</button>

                </div>
            </section>
        </>
    )
}
export default Gallery