import "./Button.css";

export const Button = ( {children, selected, onClick} ) => {

    const className = `button ${selected ? "selected" : "outline"}`;

    return (
        <button className = {className}
        onClick={onClick}>

            {children}
        </button>
    )
}