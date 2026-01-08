"use client";

import { useRef } from "react";

function useRefPage(){
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        if(!inputRef.current?.value){
           return alert("input tidak boleh kosong");
        }
        alert(inputRef.current.value)
    };
    return(
    <div>
        <h1>useRefPage</h1>
        <input type="text" className="border" ref={inputRef} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
    );
}

export default useRefPage;