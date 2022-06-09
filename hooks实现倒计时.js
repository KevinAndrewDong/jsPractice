import React, { useState, useEffect } from "react";

export default function App() {
    const [count, setCount] = useState(5);
    useEffect(() => {
        const newTimer = setTimeout(() => {
            if (count > 0) {
                setCount((c) => c - 1);
            }
        }, 1000);
        return () => clearInterval(newTimer);
    }, [count]);

    return <div>{count}</div>;
}
