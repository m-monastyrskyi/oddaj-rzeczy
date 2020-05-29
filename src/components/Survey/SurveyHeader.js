import React from 'react';

const SurveyHeader = () => {
    return (
        <header className="survey">
            <div className="container">
                <div className="survey__wrapper">
                    <div className="survey-hero__wrapper">
                        <div className="survey-hero">
                            <div className="survey-hero__title">
                                <h2 className="decoration">Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h2>
                            </div>
                            <div className="survey-hero__subtitle">
                                Wystarczą 4 proste kroki:
                            </div>
                            <div className="survey-hero__steps">
                                <div className="survey-hero__step">
                                    <h3>1</h3>
                                    <p>Wybierz rzeczy</p>
                                </div>
                                <div className="survey-hero__step">
                                    <h3>2</h3>
                                    <p>Spakuj je w worki</p>
                                </div>
                                <div className="survey-hero__step">
                                    <h3>3</h3>
                                    <p>Wybierz fundację</p>
                                </div>
                                <div className="survey-hero__step">
                                    <h3>4</h3>
                                    <p>Zamów kuriera</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="survey-alert">
                        <h1 className="alert__title">Ważne!</h1>
                        <p className="alert__text">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
                            wiedzieć komu najlepiej je przekazać.</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default SurveyHeader;