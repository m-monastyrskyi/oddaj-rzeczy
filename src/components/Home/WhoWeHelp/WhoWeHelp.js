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
                {
                    isLoading && <div className="loading" />
                }
                {
                    dataFromFirebase && !isLoading && dataFromFirebase.map((tab, index) => <button
                            key={index}
                            onClick={() => setActiveData(tab)} >
                            {tab.recipient}
                        </button>
                    )
                }
                {
                    activeData && <SingleTab data={activeData}/>
                }
            </div>
        </section>
    );
};

export default WhoWeHelp;