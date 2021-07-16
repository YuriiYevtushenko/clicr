import React from 'react'
import s1 from '../images/services_1.png'
import s2 from '../images/services2.png'
import arrow_blue from '../images/services__arrow.png'
import arrow_green from '../images/services_arrow2.png'
const Services = () => {
    return (
        <>
            <section className='services'>
                <div className='services__inner'>
                    <div className='services__title'>
                        Our Services
                    </div>
                    <div className='services__block services__block--blue'>
                        <div className='services__image-wrap'>
                            <img src={s1} className='services__image' alt='logo'/>
                        </div>
                        <div className='services__content'>
                            <span className='services__content__title'>Photo Preview</span>
                            <span className='global__text services__text'>Invest on your commercial product photography on a visual story created by our creative team. Each click at the most reasonable price going to pay you more.</span>
                            <div className='services__links'>
                                <button className='services__button services__button--blue'>Explore service<img src={arrow_blue} alt='logo' className='services__arrow'/> </button>
                                <button className='services__button services__button--blue'>Pricing<img src={arrow_blue} alt='logo' className='services__arrow'/></button>
                            </div>
                        </div>
                    </div>
                    <div className='services__block services__block--green'>
                        <div className='services__content'>
                            <span className='services__content__title services__content__title--green'>Product Revision</span>
                            <span className='global__text services__text'>It's not just another edge correcting service. A team trusted by more than 5,000 brands will work at your product with care and creativity.
                            </span>
                            <div className='services__links'>
                                <button className='services__button services__button--green'>Explore service<img src={arrow_green} alt='logo' className='services__arrow'/> </button>
                                <button className='services__button services__button--green'>Pricing<img src={arrow_green} alt='logo' className='services__arrow'/></button>
                            </div>
                        </div>
                        <div className='services__image-wrap'>
                            <img src={s2} className='services__image' alt='logo'/>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Services