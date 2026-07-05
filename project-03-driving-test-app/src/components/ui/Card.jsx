import "./Card.css";

export const Card = ({ children }) => {
    return (
        <div className="card">
            <div className="card-content">
                {children}
            </div>
        </div>
    )
}