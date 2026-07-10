import { Button } from "./ui/Button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";


const NavigationControls = ({currentQuestionIndex, totalQuestions, dispatch}) => {
    return (
        <div style={
            {
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2rem",
            }
        }>
            <Button onClick={() => dispatch({type: "PREV"})} 
            disabled={currentQuestionIndex === 0}
            variant={currentQuestionIndex === 0 ? "navigation-outline" : "navigation-selected"}>
                <ArrowLeft size={20} />
            </Button>
            {currentQuestionIndex + 1 === totalQuestions? (
                <Button onClick={() => dispatch({type: "SUBMIT"})} variant="navigation-selected">
                    <CheckCircle size={20} />
                </Button>
            ) : ( <Button onClick={() => dispatch({type: "NEXT"})} 
            variant="navigation-selected">
                <ArrowRight size={20} />
            </Button>)}
        </div>
    );
}

export default NavigationControls;