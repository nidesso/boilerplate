import { useEffect, useState } from "react"

const useFetch = (url: string, options = undefined) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(url, options)
            .then(res => res.json())
            .then(setData)
    }, [url, options]);
    
    return data;
}

export default useFetch