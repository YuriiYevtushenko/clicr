import React from 'react'

const Faq = () => {
    return (
        <>
            <section className='faq'>
                <div className='faq__inner'>
                    <span className='faq__title'>FAQ</span>
                    <div className='faq__container'>
                        <div className='faq__container__item'>
                            <span className='faq__container__title faq__container__title--blue'>What`s the turnabout time?</span>
                            <p className='global__text faq__container__desc'>Generally the turnabout time depends on the scheme of pricing you are selecting. The tentative turnaround time for orders less than 100 images is up to 12 business days from the time we receive your products and payment. Reach our support to get better insight.
                            </p>
                        </div>
                        <div className='faq__container__item'>
                            <span className='faq__container__title faq__container__title--green'>What are the delivery options?</span>
                            <p className='faq__container__desc'>Deliver your products by using the labeling with the help of any courier service or just drop it at our door step at the Biancca Studio, San Francisco.
                            </p></div>
                        <div className='faq__container__item'>
                            <span className='faq__container__title faq__container__title--orange'>Will my products be returned?</span>
                            <p className='global__text faq__container__desc'>That’s totally up to you. If you want the product back, then you have to include that option in registration time. Else, it will be stored in our storage and you can pick that whenever you wish.
                            </p></div>
                        <div className='faq__container__item'><span className='faq__container__title faq__container__title--orange'>Can I provide references?</span>
                            <p className='global__text faq__container__desc'>Absolutely! If clients provide any sort of references, that is highly appreciated by our creative team.

                            </p></div>
                        <div className='faq__container__item'><span className='faq__container__title faq__container__title--blue'>Can I be present during the shoot?</span>
                            <p className='global__text faq__container__desc'>Sorry, we currently do not support that under any pricing scheme. Usually any other person than the creative team is not allowed to attend the phototshoot. Otherwise, it has effects on others and time & effort get wasted as we conduct the process on a fixed plan. We hope that people would understand and respect our creative process.

                            </p></div>
                        <div className='faq__container__item'><span className='faq__container__title faq__container__title--green'>Do you support revisions?</span>
                            <p className='global__text faq__container__desc'>Yes, based on the pricing plan, you will have several revision options. If you want to bring more than 90% change, then you will have to pay further.

                            </p></div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Faq