import React from 'react'

const Deliver = () => {
    return (
        <>
            <section className='deliver'>
                <div className='deliver__inner'>
                    <span className='deliver__text'>How it happens</span>
                    <span className='deliver__title'>You deliver-We Click</span>
                    <div className='deliver__items'>
                        <div className='deliver__item'>
                            <span className='deliver__item__number deliver__item__number--blue'> 1</span>
                            <span className='global__text--blue deliver__item__title'>Inform us about your product</span>
                            <p className='global__text deliver__item__text'>
                                Introduce your product, select through the pricing plan and let us know if you have any references in mind
                            </p>
                        </div>
                        <div className='deliver__item'>
                            <span className='deliver__item__number deliver__item__number--orange'> 2</span>
                            <span className='global__text--orange deliver__item__title'>Deliver your products</span>
                            <p className='global__text deliver__item__text'>
                               Deliver the sujects at our doorstep, we will click perfect shots in no time and make it online ready
                            </p>
                        </div>
                        <div className='deliver__item'>
                            <span className='deliver__item__number deliver__item__number--green'> 3</span>
                            <span className='global__text--green deliver__item__title'>Reviewing the shots</span>
                            <p className='global__text deliver__item__text'>
                               After the photoshoot, you will get to review the shots and let us know if there any modification needed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Deliver