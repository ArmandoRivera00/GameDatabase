import React, { useEffect, useState } from "react";

function FetchAPI() {
    const [records, setRecords] = useState([])


   useEffect(() => {
        fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15')
        .then(response => response.json())
        .then(data => setRecords(data))
        .catch(err => console.log(err))
   }, []) 
    return(
        <div>
            <ul>
                {records.map((list, index) => (
                    <li key={index}>{list.id} | {list.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchAPI