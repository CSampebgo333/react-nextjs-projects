const DEFAULT_TASKS = [
    {
        "id": 1,
        "text": "Buy groceries",
        "priority": 1,
        "done": true
    },
    {
        "id": 2,
        "text": "Have a walk",
        "priority": 2,
        "done": false
    },
    {
        "id": 3,
        "text": "Read a book",
        "priority": 3,
        "done": false
    },
    {
        "id": 4,
        "text": "Visite Uncle",
        "priority": 2,
        "done": false
    }
]


export const getStoredTasks = () => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks){
        return JSON.parse(savedTasks);
    }
    updateLocalStorage(DEFAULT_TASKS);
    return DEFAULT_TASKS;
}

export const updateLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}