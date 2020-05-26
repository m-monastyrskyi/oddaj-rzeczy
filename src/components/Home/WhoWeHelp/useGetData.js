import {useState, useEffect} from 'react';
import fire from "./firebseConfig";

const useGetData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const ref = fire.database().ref('data');

        ref.on("value", function (snapshot) {
            setData(snapshot.val());
            setLoading(false);
        }, function (error) {
            console.log("Error: " + error.code);
        });

    }, []);

    return [data, loading];
};

export default useGetData;