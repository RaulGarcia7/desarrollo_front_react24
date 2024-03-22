import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(data => {setData(data), setLoading(false)})
            
    }, []);

    return { data, loading };
}

export default useFetch;