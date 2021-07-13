import React from 'react'
import check from '../images/plans__check-circle.png'
const Plans = () => {
    return (
        <>
            <section className='plans'>
                <div className='plans__inner'>
                    <p className='plans__title'>Our Packages</p>
                    <div className='plans__items'>
                        <div className='plans__item plans__item--blue'>
                            <span className='global__text plans__name'>Basic</span>
                            <span className='plans__price plans__price--big plans__price--blue'>$9</span>
                            <span className='plans__price plans__price--small plans__price--blue'>/ per image</span>
                            <ul className='plans__list'>
                                <li className='global__text plans__list__item'><img src={check} alt='check' className='plans__image'/> High quality images
                                </li>
                                <li className='global__text plans__list__item'> <img src={check} alt='check' className='plans__image'/> Single Revision</li>
                                <li className='global__text plans__list__item'> <img src={check} alt='check' className='plans__image'/> 10 Products per order</li>
                                <li className='global__text plans__list__item'> <img src={check} alt='check' className='plans__image'/> Not providing softcopy</li>
                                <li className='global__text plans__list__item'> <img src={check} alt='check' className='plans__image'/> Free return shipment</li>
                            </ul>
                            <button className='global__button plans__button plans__button--blue'>Choose plan</button>
                        </div>
                        <div className='plans__item plans__item--orange'>
                            <span className='global__text plans__name'>Avarage</span>
                            <span className='plans__price plans__price--big plans__price--orange'>$19</span>
                            <span className='plans__price plans__price--small plans__price--orange'>/ per image</span>
                            <ul className='plans__list'>
                                <li className='global__text plans__list__item'> <img src={check} alt='check' className='plans__image'/> High quality images</li>
                                <li className='global__text plans__list__item'> <img src={check} alt='check' className='plans__image'/> 3 Revision</li>
                                <li className='global__text plans__list__item'> <img src={check} alt='check' className='plans__image'/> 25 Products per order</li>
                                <li className='global__text plans__list__item'> <img src={check} alt='check' className='plans__image'/> Providing softcopy</li>
                                <li className='global__text plans__list__item'> <img src={check} alt='check' className='plans__image'/> Free return shipment</li>
                            </ul>
                            <button className='global__button plans__button plans__button--orange'>Choose plan</button>
                        </div>
                        <div className='plans__item plans__item--green'>
                        <span className='global__text plans__name'>Professional</span>
                        <span className='plans__price plans__price--big plans__price--green'>$29</span>
                        <span className='plans__price plans__price--small plans__price--green'>/ per image</span>
                        <ul className='plans__list '>
                            <li className='global__text plans__list__item'> <img src={check} alt='check' className='plans__image'/> High quality images</li>
                            <li className='global__text plans__list__item'> <img src={check} alt='check' className='plans__image'/> 5 Revision</li>
                            <li className='global__text plans__list__item'> <img src={check} alt='check' className='plans__image'/> 50 Products per order</li>
                            <li className='global__text plans__list__item'> <img src={check} alt='check' className='plans__image'/> Providing softcopy & PSD</li>
                            <li className='global__text plans__list__item'> <img src={check} alt='check' className='plans__image'/> Free return shipment</li>
                        </ul>
                        <button className='global__button plans__button plans__button--green'>Choose plan</button>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Plans