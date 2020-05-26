import React, {useEffect, useState} from 'react';
import data from "./data";
import SingleTab from "./SingleTab";

const WhoWeHelp = () => {
    const [activeData, setActiveData] = useState(data[0]);

    useEffect(() => {
        console.log("activeData:");
        console.log(activeData);
    }, [activeData]);

    return (
        <section className="foundations">
            <div className="container">
                {
                    data.map((tab, index) => <button
                            key={index}
                            onClick={() => setActiveData(tab)} >
                            {tab.recipient}
                        </button>
                    )
                }
                <SingleTab data={activeData}/>
            </div>
        </section>
    );
};

export default WhoWeHelp;