import { Card } from "./ui/Card";

const ScoreSummary = ({ score, total }) => {
    
    const isPass = score > 42;


    return (
        <Card>
            <h2 style={{fontSize: "1.5rem", marginBottom: "1rem", color: isPass? "#28a745" : "#dc3545"}}>
                {isPass? "You Passed!" : "You Failed!"}
            </h2>
            <p style={{fontSize: "1.2rem"}}>
                You scored {score} out of {total}
            </p>
        </Card>
    );
}

export default ScoreSummary;