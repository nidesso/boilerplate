import { useEffect } from "react";
import { useState } from "react";

function useResizeObserver(elementRef: HTMLElement) {
    const [entries, setEntries] = useState<ResizeObserverEntry[]>([]);

    useEffect(() => {
        const observer = new ResizeObserver(e => {
            setEntries(e);
        });
        if (elementRef) {
            observer.observe(elementRef)
        }

        return () => {
            observer.unobserve(elementRef)
        }
    }, [elementRef])

    return entries;
}

export default useResizeObserver;