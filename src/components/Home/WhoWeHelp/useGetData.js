import {useState, useEffect} from 'react';
import Firebase from "../../Firebase/firebase";
import tmpData from "./data"


const useGetData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       // const fire = new Firebase();
       //  const fire = new Firebase();
       //  const ref = fire.app.database().ref('data');
       //  ref.on("value", function (snapshot) {
       //      setData(snapshot.val());
       //      setLoading(false);
       //  }, function (error) {
       //      console.log("Error: " + error.code);
       //  });

        setData(tmpData);
        setLoading(false);
    }, []);

    return [data, loading];
};

export default useGetData;