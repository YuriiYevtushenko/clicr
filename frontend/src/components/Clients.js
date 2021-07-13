import React from 'react'
import netflix from '../images/clients__netflix.png'
import facebook from '../images/clients__facebook.png'
import freelancer from '../images/clients__freelancer.png'
import mailbluster from '../images/clients__mailbluster.png'
import wagon from '../images/clients__themeWagon.png'
const Clients = () => {
    return (
        <>
            <section className='clients'>
                <div className='clients__inner'>
                    <span className='clients__text'>Commercial product photography agency</span>
                    <span className='clients__text'>praised by over 5,000 brands.</span>
                    <div className='clients__image-wrap'>
                        <img src={netflix} alt='logo' className='clients__image'/>
                        <img src={facebook} alt='logo' className='clients__image'/>
                        <img src={freelancer} alt='logo' className='clients__image'/>
                        <img src={mailbluster} alt='logo' className='clients__image'/>
                        <img src={wagon} alt='logo' className='clients__image'/>
                    </div>
                    <span className='clients__separator'/>
                </div>
            </section>
        </>
    )
}
export default Clients