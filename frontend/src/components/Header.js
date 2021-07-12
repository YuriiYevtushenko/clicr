import React from 'react'
import logo from '../images/header__logo.png'
const Header = () => {
    const menuItems=['Home',
    'How it works',
    'Reviews',
    'Works',
    'FAQs']
    return (

            <div className='header'>
                <div className='header__inner'>
                    <img src={logo} alt='clicr_logo' className='header__logo'/>
                    <div className='header__wrap'>
                        <ul className='header__menu'>
                         {menuItems.map((item,index)=>(
                        <li key={index} className='header__menu__items'>{item}</li>
                        ))}

                        </ul>
                    <button className='global__text header__menu__button'>Get Started</button>
                    </div>
                </div>
            </div>

    )
}
export default Header