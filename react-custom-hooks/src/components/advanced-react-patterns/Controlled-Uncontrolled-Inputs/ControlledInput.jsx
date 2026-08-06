import { useState } from "react";

const ControlledInput = () => {

    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value)
    };

    return (
    <div>
        <h3> Controlled Input Template.</h3>
        <input 
            type="text"
            placeholder="Name..."
            value={name}
            onChange={handleChange}
            style={{
                marginBottom: "0.5rem"
            }}
        />
        <p style={{marginBottom: "2rem"}}>Entered name is: <strong>{name}</strong></p>
    </div>
    );
}

export default ControlledInput;