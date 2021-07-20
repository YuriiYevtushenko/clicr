import React from 'react'
import {Link} from "gatsby";
import location from '../images/footer__location.png'
import mail from '../images/footer_mail.png'
import phone from '../images/footer_phone.png'
import copyright from '../images/copyright.png'
const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className='footer__inner'>
                    <div className='footer__contacts'>
                        <div className='footer__contacts__item'>
                            <div className='footer__contacts__block'>
                                <span className='footer__title'>Why Us</span>
                                <ul className='footer__list'>
                                    <Link to='/'>
                                        <li>Channel</li>
                                    </Link>
                                    <Link to='/'>
                                        <li>Engagement</li>
                                    </Link>
                                    <Link to='/'>
                                        <li>Scale</li>
                                    </Link>
                                    < Link to='/'>
                                        <li>Watch Demo</li>
                                    </Link>
                                </ul>
                            </div>
                            <div className='footer__contacts__block'>
                                <span className='footer__title'>Product</span>
                                <ul className='footer__list'>
                                    <Link to='/'>
                                        <li>Features</li>
                                    </Link>
                                    <Link to='/'>
                                        <li>Integrations</li>
                                    </Link>
                                    <Link to='/'>
                                        <li>Enterprise</li>
                                    </Link>
                                    <Link to='/'>
                                        <li>Solutions</li>
                                    </Link>
                                </ul>
                            </div>
                            <div className='footer__contacts__block'>
                                <span className='footer__title'>Resources</span>
                                <ul className='footer__list'>
                                    <Link to='/'>
                                        <li>Partners</li>
                                    </Link>
                                    <Link to='/'>
                                        <li>Developers</li>
                                    </Link>
                                    <Link to='/'>
                                        <li>Apps</li>
                                    </Link>
                                    <Link to='/'>
                                        <li>Blogs</li>
                                    </Link>
                                </ul>
                            </div>
                            <div className='footer__contacts__block'>
                                <span className='footer__title'>Company</span>
                                <ul className='footer__list'>
                                    <Link to='/'>
                                        <li>Abouts Us</li>
                                    </Link>
                                    <Link to='/'>
                                        <li>Leadership</li>
                                    </Link>
                                    <Link to='/'>
                                        <li>Investor Relations</li>
                                    </Link>
                                    <Link to='/'>
                                        <li>News</li>
                                    </Link>
                                </ul>
                            </div>
                            <div className='footer__contacts__block'>
                                <span className='footer__title'>Pricing</span>
                                <ul className='footer__list'>
                                    <Link to='/'>
                                        <li>Plans</li>
                                    </Link>
                                    <Link to='/'>
                                        <li>Paid vs.Fee</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className='footer__contacts__item footer__contacts__item--contacts'>
                            <div className='footer__contacts__block footer__contacts__block--contacts'>
                                <span className='footer__title'>Contact</span>
                                <ul className='footer__list '>
                                    <li><img src={phone} className='footer__image' alt='logo'/>+214556905345</li>
                                    <li><img src={mail} className='footer__image' alt='logo'/>something@email.com</li>
                                    <li><img src={location} className='footer__image' alt='logo'/>567, Kansas, San Francisco, USA
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <span className='footer__separator'/>
                    <div className='footer__copyright'>
                        <span className='footer__text'>All rights Reserved <img src={copyright} alt='logo' className='footer__image-copyright'/>Your Company 2021</span>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer