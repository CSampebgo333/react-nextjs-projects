import "./ProgressBar.css";

const ProgressBar = ({current, total}) => {
    const progress = ((current + 1) / total) * 100;

    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{width: `${progress}%`}}></div>
        </div>
    )
} 
 
export default ProgressBar;