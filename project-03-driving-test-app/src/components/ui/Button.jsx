import "./Button.css";

export const Button = ( {children, selected, onClick, disabled, variant} ) => {

    const className = `button ${variant || (selected ? "selected" : "outline")}`;

    return (
        <button 
        className = {className}
        onClick={onClick}
        disabled={disabled}>

            {children}
        </button>
    )
}