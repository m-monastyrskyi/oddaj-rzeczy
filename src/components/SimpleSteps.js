import React from 'react';
import {Link} from "react-router-dom";
import icon1 from '../assets/Icon-1.svg';
import icon2 from '../assets/Icon-2.svg';
import icon3 from '../assets/Icon-3.svg';
import icon4 from '../assets/Icon-4.svg';

const SimpleSteps = () => {
    return (
        <section className="simple-steps">
            <div className="container">
                <div className="simple-steps__wrapper">
                    <div className="simple-steps__title">
                        <h2 className="decoration">Wystarczą 4 proste kroki</h2>
                    </div>
                    <div className="simple-steps__steps">

                        <div className="simple-steps__pair">
                            <div className="step">
                                <div className="step__icon">
                                    <img src={icon1} alt="clothes"/>
                                </div>
                                <div className="step__title">
                                    <h3>Wybierz rzeczy</h3>
                                </div>
                                <div className="step__subtitle">
                                    <p>
                                        ubrania, zabawki, sprzęt i inne
                                    </p>
                                </div>
                            </div>

                            <div className="step">
                                <div className="step__icon">
                                    <img src={icon2} alt="clothes"/>
                                </div>
                                <div className="step__title">
                                    <h3>Spakuj je</h3>
                                </div>
                                <div className="step__subtitle">
                                    <p>
                                        skorzystaj z worków na śmieci
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="simple-steps__pair">
                            <div className="step">
                                <div className="step__icon">
                                    <img src={icon3} alt="clothes"/>
                                </div>
                                <div className="step__title">
                                    <h3>Zdecyduj komu chcesz pomóc</h3>
                                </div>
                                <div className="step__subtitle">
                                    <p>
                                        wybierz zaufane miejsce
                                    </p>
                                </div>
                            </div>

                            <div className="step">
                                <div className="step__icon">
                                    <img src={icon4} alt="clothes"/>
                                </div>
                                <div className="step__title">
                                    <h3>Zamów kuriera</h3>
                                </div>
                                <div className="step__subtitle">
                                    <p>
                                        kurier przyjedzie w dogodnym terminie
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link className="simple-steps__btn btn" to="/logowanie/">Oddaj<br/>rzeczy</Link>
                </div>
            </div>
        </section>
    );
};

export default SimpleSteps;