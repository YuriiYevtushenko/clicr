import React from 'react'
import camera from '../images/cta__camera.png'
const Cta = () => {
    return (
        <>
            <section className='cta'>
                <div className='cta__inner'>
                    <span className='cta__title'>San Francisco Based</span>
                    <span className='cta__title'>Product Photography Services</span>
                    <span className='global__text cta__text'>
                        Get high-quality aesthetic photographs of your valuable products within few days
                    </span>
                    <button className='global__button cta__button'>
                        <img src={camera} alt='camera' className='cta__image'/> Book a photoshoot</button>
                </div>
            </section>
        </>
    )
}
export default Cta