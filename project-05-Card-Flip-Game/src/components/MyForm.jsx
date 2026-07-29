import { useRef } from "react";
import MyInput from "./MyInput";

const MyForm = () => {

    const inputRef = useRef(null);

    function handleFocus () {
        inputRef.current.focus();
    }

    return (
        <div>
            <MyInput 
                type="text"
                placeholder="Enter your name"
                style={{padding: "10px", fontSize: "16px"}}
                ref={inputRef}
            />
            <button style={{padding: "10px", fontSize: "16px", cursor: "pointer"}} onClick={handleFocus}>
                Focus Input
            </button>
        </div>
    );
}

export default MyForm;