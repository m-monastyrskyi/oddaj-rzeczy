import React, {useEffect, useState} from 'react';
//import data from "./data";
import SingleTab from "./SingleTab";
import useGetData from "./useGetData";

const WhoWeHelp = () => {
    const [activeData, setActiveData] = useState(null);
    const [dataFromFirebase, isLoading] = useGetData();

    useEffect(() => {
        setActiveData(dataFromFirebase[0]);
    }, [dataFromFirebase]);

    return (
        <section className="foundations">
            <div className="container">
                <div className="foundations__wrapper">
                    <h2 className="foundations__header decoration">Komu pomagamy?</h2>
                    <div className="tabs">
                        {
                            isLoading && <div className="loading"/>
                        }
                        <div className="tabs__buttons">
                            {
                                dataFromFirebase && !isLoading && dataFromFirebase.map((tab, index) => <button
                                        className={activeData === tab ? "tabs__btn current" : "tabs__btn"}
                                        key={index}
                                        onClick={() => setActiveData(tab)}>
                                        {tab.recipient}
                                    </button>
                                )
                            }
                        </div>
                        {
                            activeData && <SingleTab data={activeData}/>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeHelp;