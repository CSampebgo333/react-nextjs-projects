import {Button} from "./ui/Button.jsx"; 

const AnswerOptions = ({ options, selectedAnswer, onSelect }) => { 
    return (
        <div>
            {options.map((option, index) => (
                <div key={index} style={{ marginBottom: "0.5rem" }}>
                    <Button selected={selectedAnswer === index} onClick={() => onSelect(index)}>
                        {option}
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default AnswerOptions;