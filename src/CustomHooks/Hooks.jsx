import React, { useEffect, useState } from 'react';

const useBooksData = () => {
    const [booksData, setBooksData] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch('/Data.json');
            const data = await res.json()
            setBooksData(data)
            setLoading(false)
        }
        fetchData()
    
    },[])
    // console.log(booksData)
    


    return {booksData,loading};
};

export default useBooksData;