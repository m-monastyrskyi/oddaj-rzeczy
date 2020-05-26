import React, {useEffect, useState} from 'react';

const SingleTab = ({data}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState(data.list);

    const itemsPerPage = 3;
    const totalPages = Math.ceil(data.list.length / itemsPerPage);

    const pagination = () => {
        let result = [];
        if (data.list.length > itemsPerPage) {
            for (let i = 1; i <= totalPages; i++) {
                result.push(<li
                        key={i}
                        className={i === currentPage ? "current" : null}
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
        console.log(startIndex, endIndex);
        setCurrentItems(data.list.slice(startIndex, endIndex));

    }, [currentPage])

    return (
        <div>
            {
                <h2>{data.title}</h2>
            }
            <ul>
                {
                    currentItems.map((item, index) => (
                        <li style={{margin: "20px 0"}} key={index}>
                            {
                                <>
                                    <h2>{item.name}</h2>
                                    <h3>{item.description}</h3>
                                    <p>{item.stuff}</p>
                                </>
                            }
                        </li>
                    ))
                }
                {
                    pagination() && <ul>
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