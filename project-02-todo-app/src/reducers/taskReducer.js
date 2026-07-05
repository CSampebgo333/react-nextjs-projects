import { updateLocalStorage } from "../utils/localStorageUtils";


export const taskReducer = (state, action) => {

    let updatedTasks;

    switch (action.type) {

        case "ADD":
            updatedTasks = [...state, action.payload];
            break;

        case "TOGGLE_DONE":
            updatedTasks = state.map((state) => 
            state.id === action.payload? {...state, done: !state.done} : state );
            break;

        case "DELETE_TASK":
            updatedTasks = state.filter((task) => task.id !== action.payload);
            break;

        case "UPDATE_TASK":
            updatedTasks = state.map((task) => 
                task.id === action.payload.taskID? 
                {...task, text: action.payload.newText, priority: action.payload.newPriority} : task);
            break;
        
        case "SORT":
            updatedTasks = [...state].sort((t_1, t_2) => t_1.priority - t_2.priority);
            break;


        default:
            updatedTasks = state;
    }

    updateLocalStorage(updatedTasks);

    return updatedTasks;
}