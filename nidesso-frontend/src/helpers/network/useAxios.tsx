import { useEffect, useRef, useState } from "react";
import { client } from "./api";
import { Method } from 'axios';

const useAxios = (url: string, method: Method, payload?: any) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    const controllerRef = useRef(new AbortController());
    const cancel = () => {
        controllerRef.current.abort();
    };

    useEffect(() => {
        (async () => {
            try {
                const response = await client.request({
                    data: payload,
                    signal: controllerRef.current.signal,
                    method,
                    url,
                });

                setData(response.data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoaded(true);
            }
        })();
    }, [method, payload, url]);

    return { cancel, data, error, loaded };
};

export default useAxios;