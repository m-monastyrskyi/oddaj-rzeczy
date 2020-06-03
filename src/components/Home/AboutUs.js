import React from 'react';
import signature from '../../assets/Signature.svg'

const AboutUs = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__content">
                        <div className="about__title">
                            <h2 className="decoration">O nas</h2>
                        </div>
                        <p className="about__text">
                            Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya
                            nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                        </p>
                        <div className="about__signature">
                            <img src={signature} alt="Our CEO's signature"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;