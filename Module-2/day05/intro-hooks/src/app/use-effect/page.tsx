"use client";

import { useEffect } from "react";
import { useState } from "react";

function useEffectPage() {
    const [number, setNumber] = useState<number>(0);
    const [count, setCount] = useState<number>(0);
    
    const incrementNumber = ()  => {
        setNumber(number + 1);
    };
    // mode 1: run setiap ada perubahan terhadap state/prop tertentu
    useEffect(() => {
        console.log("use effect jalankan mode 1");
    });
    // mode 2: run sekali saat komponen pertama kali di-mount
    useEffect(() => {
        console.log("use effect jalankan mode 2");
    }, []);
    // mode 3: sama seperti mode2, tapi ada fungsi pembersihan (cleanup) saat komponen di-unmount
    useEffect(() => {
        console.log("use effect jalankan mode 1");
    }, [count]);
    return(
    <div>
        <h1>useEffectPage</h1>
        <p>{number}</p>
        <button onClick={incrementNumber}>Increment Number</button>
        <hr />
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
    );
}

export default useEffectPage;