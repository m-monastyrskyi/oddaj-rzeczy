import React, {useState} from 'react';
import Form1 from "./Forms/Form1";
import Form2 from "./Forms/Form2";
import Form3 from "./Forms/Form3";
import Form4 from "./Forms/Form4";
import Summary from "./Forms/Summary";
import ThanksMessage from "./Forms/ThanksMessage";

const SurveyForm = () => {
    const [currentPage, setCurrentPage] = useState(1);


    const getCurrentForm = () => {
        switch (currentPage) {
            case 1:
                return <Form1/>
            case 2:
                return <Form2/>
            case 3:
                return <Form3/>
            case 4:
                return <Form4/>
            case 5:
                return <Summary/>
            case 6:
                return <ThanksMessage/>
        }
    }


    return (
        <section className="survey-form">
            {
                getCurrentForm()
            }
            <div>
                {
                    ![1,6].includes(currentPage)  && <button onClick={()=>setCurrentPage(prev => prev - 1)}>Wstecz</button>
                }
                {
                    ![5,6].includes(currentPage) && <button onClick={()=>setCurrentPage(prev => prev + 1)}>Dalej</button>
                }
                {
                    [5].includes(currentPage) && <button onClick={()=>setCurrentPage(prev => prev + 1)}>Potwierdzam</button>
                }
                
            </div>
        </section>
    );
};

export default SurveyForm;