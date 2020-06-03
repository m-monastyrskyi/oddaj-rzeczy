import {useState, useEffect} from 'react';
import tmpData from "./data"

const useGetData = ({firebase}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        firebase.app.database().ref('data').on("value", function (snapshot) {
                setData(snapshot.val());
                setLoading(false);
            }, function (error) {
                console.log("Error: " + error.code);
            });


        //
        // const ref = firebase.database().ref('data');
        // ref.on("value", function (snapshot) {
        //     setData(snapshot.val());
        //     setLoading(false);
        // }, function (error) {
        //     console.log("Error: " + error.code);
        // });

        setData(tmpData);
        setLoading(false);
    }, []);

    return [data, loading];
};

export default useGetData;