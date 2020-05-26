import React, {useEffect, useState} from 'react';

const SingleTab = ({data}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);

    const itemsPerPage = 3;
    const totalPages = Math.ceil(data.list.length / itemsPerPage);

    const pagination = () => {
        let result = [];
        if (data.list.length > itemsPerPage) {
            for (let i = 1; i <= totalPages; i++) {
                result.push(<li
                        key={i}
                        className={i === currentPage ? "pagination__item current" : "pagination__item"}
                        onClick={() => setCurrentPage(i)}>
                        {i}
                    </li>
                )
            }
            return result;
        }
        return null;
    }

    useEffect(() => {
        const startIndex = currentPage * itemsPerPage - itemsPerPage;
        const endIndex = startIndex + 3;
        setCurrentItems(data.list.slice(startIndex, endIndex));

    }, [currentPage, data.list]);
    useEffect(() => {
        setCurrentPage(1);
    }, [data.list])

    return (
        <div className="single-tab">
            {
                <h2 className="single-tab__title">{data.title}</h2>
            }
            <ul className="single-tab__list">
                {
                    currentItems.map((item, index) => (
                        <li className="organization" key={index}>
                            {
                                <>
                                    <div className="organization__meta">
                                        <h2 className="organization__name">{item.name}</h2>
                                        <h3 className="organization__description">{item.description}</h3>
                                    </div>
                                    <div className="organization__stuff">
                                        <p>{item.stuff}</p>
                                    </div>
                                </>
                            }
                        </li>
                    ))
                }
                {
                    pagination() && <ul className="pagination">
                        {
                            pagination().map(el => el)
                        }
                    </ul>
                }
            </ul>


        </div>
    );
};

export default SingleTab;