"use client";

import { memo,useCallback,useState } from "react";

function useCallBackPage() {
    const [count, setCount] = useState<number>(0);
    const [theme, setTheme] = useState<"light"|"dark">("light");
    
    const increment = () => {
        setCount(count + 1);
    };

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return(
    <div>
        <h1>useCallBackPage</h1>

        <p>{count}</p>
        <ChildComponent handleClick={increment} />

        <hr />

        <p>{theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
    );
}

export default useCallBackPage;

interface ChildComponentProps {
    handleClick: () => void;
}

const ChildComponent = memo((props: ChildComponentProps) => {
    console.log("CHILD RENDER");
    return(
        <div>
            <button onClick={props.handleClick}>Increment</button>
        </div>
    );
});