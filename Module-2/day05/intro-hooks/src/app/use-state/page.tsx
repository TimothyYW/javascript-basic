"use client";

import { useState } from "react";

function useStatePage(){
    const [name, setName] = useState<string>("Klaus");

    const changeName = () => {
        setName("Anna");
    };

    let orang = "Claudia";

    const changeOrang = () => {
        orang = "Sabine";
    };

    return (
        <div>
            <h1>useStatePage</h1>

            <p>{name}</p>

            <button>update</button>
        </div>
    );
}

export default useStatePage;