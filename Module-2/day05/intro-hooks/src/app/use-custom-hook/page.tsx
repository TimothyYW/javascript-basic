"use client";

import useCounter from "@/hooks/useCounter";

function useCustomHookPage(){
    const {count, handleDecrement, handleIncrement} = useCounter();

    return(
        <div>
            <h1>useCustomHookPage</h1>

            <button onClick={handleDecrement}>decrement</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>increment</button>
        </div>
    );
}

export default useCustomHookPage;