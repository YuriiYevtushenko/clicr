import React, {useState} from 'react'
import logo from '../images/header__logo.png'
import Link from "gatsby-link";

const Header = () => {
    const [mobile, setMobile] = useState(false)
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
                             <li key={index} ><Link to='/' className='header__menu__items'>{item}</Link></li>
                        ))}

                        </ul>
                    <button className='global__text header__menu__button'>Get Started</button>

                    </div>
                    <button className='header__burger'   onClick={e=>setMobile(!mobile)}>
                        <span className={mobile?'header__burger__item header__burger__item--active':'header__burger__item'}/>
                        <span className={mobile?'header__burger__item header__burger__item--active':'header__burger__item'}/>
                        <span className={mobile?'header__burger__item header__burger__item--active':'header__burger__item'}/>
                        <span className={mobile?'header__burger__item header__burger__item--active':'header__burger__item'}/>
                    </button>
                </div>

                <div className={mobile?'header__mob header__mob--active':'header__mob'}>
                    <ul className={mobile?'header__nav header__nav--mob':'header__nav'}>
                        {menuItems.map((link)=>(
                            <Link to='/' key={link}><li  className='header__menu__items header__menu__items--mob'>
                                {link}
                            </li></Link>
                        ))}
                    </ul>
                    <button className={mobile?'header__button header__button--mob':'header__button'}>Get Started</button>
                </div>
            </div>

    )
}
export default Header