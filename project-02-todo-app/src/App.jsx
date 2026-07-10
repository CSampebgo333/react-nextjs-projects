import { useState, useReducer } from "react";

import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskOrganizer from "./components/TaskOrganizer";
import TaskList from "./components/TaskList";
import { getStoredTasks, updateLocalStorage } from "./utils/localStorageUtils";
import { taskReducer } from "./reducers/taskReducer";
import { TaskContext } from "./contexts/TaskContext";

const App = () => {

    const [tasks, dispatch] = useReducer(taskReducer, getStoredTasks());

    const [showOnlyIncompleteTasks, setShowOnlyIncompleteTasks] = useState(false);

    const sortTasks = () => {
        dispatch({type: "SORT"});
    }

    const addTask = (newTask) => {
        dispatch({type: "ADD", payload: newTask});
    }
    
    const toggleTaskDone = (id) => {
        dispatch({type: "TOGGLE_DONE", payload: id});
    }

    const deleteTask = (id) => {
        dispatch({type: "DELETE_TASK", payload: id});
    }

    const updateTask = (taskID, newText, newPriority) => {
        dispatch({type: "UPDATE_TASK", payload: {taskID, newText, newPriority} });
    }

    return (
        <TaskContext.Provider value={{deleteTask, toggleTaskDone, updateTask}} className="app">
            <h2>To-Do List</h2>
            <TaskForm addTask={addTask}/>
            <TaskOrganizer 
            showOnlyIncompleteTasks = {showOnlyIncompleteTasks} 
            setShowOnlyIncompleteTasks = {setShowOnlyIncompleteTasks} 
            sortTasks = {sortTasks}/>
            <TaskList tasks = {tasks} showOnlyIncompleteTasks = {showOnlyIncompleteTasks} />
        </TaskContext.Provider>
    )
}

export default App;