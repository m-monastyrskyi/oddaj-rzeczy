//import data from "./data";
//import useGetData from "./useGetData";
import React, {useEffect, useState} from 'react';
import SingleTab from "./SingleTab";

const WhoWeHelp = ({firebase}) => {
    //const [dataFromFirebase, isLoading] = useGetData();
    const [activeData, setActiveData] = useState(null);
    const [dataFromFirebase, setDataFromFirebase] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     setActiveData(dataFromFirebase[0]);
    // }, [dataFromFirebase]);

    useEffect(()=>{
        firebase.app.database().ref('data').on("value", function (snapshot) {
                setDataFromFirebase(snapshot.val());
                setActiveData(snapshot.val()[0]);
                setIsLoading(false);
            }, function (error) {
                console.log("Error: " + error.code);
            });
    },[])

    return (
        <section className="foundations" id="who-we-help">
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