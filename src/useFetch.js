import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoad] = useState(true);

    useEffect(() => {
        fetch(url)
        .then(response => {
            if(!response.ok){
              throw Error('Could not fetch the data for the resource')
            }
            return response.json()
        })
        .then(data => {
            setData(data)
            setError(false)
            setLoad(false)
        })
        .catch(e => {
            setError(e.message)
            setLoad(false)
           
          
        })  
       
    }, [url])

    return {data, error, loading};
}

export default useFetch;