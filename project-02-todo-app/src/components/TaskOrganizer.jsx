import { ArrowDownNarrowWide } from "lucide-react";

const TaskOrganizer = ({showOnlyIncompleteTasks, setShowOnlyIncompleteTasks, sortTasks}) => {
    return (
        <div 
        style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "10px",
            marginTop: "20px",
        }}>
            <label 
            style={{
                alignItems: "center",
                display: "flex"
            }}>
                <input 
                type="checkbox" 
                checked={showOnlyIncompleteTasks}
                onChange={() => setShowOnlyIncompleteTasks(!showOnlyIncompleteTasks)} 

                style={{marginRight: "5px"}}/>
                Show only incomplete tasks.
            </label>
            <button 
            style={{
                cursor: "pointer",
                background: "none",
                border: "none",
            }}
            onClick={sortTasks}>
                <ArrowDownNarrowWide />
            </button>
        </div>
    )
}

export default TaskOrganizer;