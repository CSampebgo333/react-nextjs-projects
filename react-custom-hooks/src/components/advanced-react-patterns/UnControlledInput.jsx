import { useRef } from "react";

const UnControlledInput = () => {

    const inputRef = useRef();

    const handleSubmit = () => {
        console.log("Entered name is: ", inputRef.current.value)
    }

    return (
    <div>
        <h3>Uncontrolled Input Template.</h3>
        <input 
            type="text"
            placeholder="Name..."
            ref={inputRef}
            style={{
                marginBottom: "0.5rem"
            }}
        />
        <button onClick={handleSubmit}>Submit</button>
        <p style={{marginBottom: "2rem"}}>Entered name is: <strong>{name}</strong></p>
    </div>
    );
}

export default UnControlledInput;