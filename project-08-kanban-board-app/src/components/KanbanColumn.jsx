import KanbanTask from "./KanbanTask";
import Button from "./ui/Button";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

const KanbanColumn = ({ column, deleteColumn, addTask, updateColumnTitle, updateTask, deleteTask }) => {

  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const [tempTitle, setTempTitle] = useState(column.title);

  const handleTitleSave = () => {
    updateColumnTitle(column.id, tempTitle);
    setIsEditingTitle(false);
  }

  const handleTitleEditCancel = () => {
    setTempTitle(column.title);
    setIsEditingTitle(false);
  }

  const handleKeyPress = (keyPressed) => {
    if (keyPressed === "Enter") {
      handleTitleSave();
    } else if (keyPressed === "Escape") {
      handleTitleEditCancel();
    }
  };


  return (
    <div className={
      "shrink-0 w-80"
    }>
      <div className={
         "h-[85vh] overflow-hidden bg-white dark:bg-gray-800 shadow-sm rounded-lg" + 
        " border border-gray-300 dark:border-gray-700 flex flex-col transition-colors"
      }>
        <div className={
          "px-5 py-2 border-b border-gray-200 dark:border-gray-700" + 
          " bg-gray-50/50 dark:bg-gray-700"
        }>
          <div className="flex items-center justify-between mb-2">
            {isEditingTitle? (
              <input 
                className={
                  "w-full text-lg font-semibold bg-transparent text-gray-800" +
                  " dark:text-white focus:outline-none"
                }
                autoFocus
                type="text"
                value={tempTitle}
                onChange={(edit) => setTempTitle(edit.target.value)}
                onBlur={handleTitleSave}
                onKeyDown={(pressedKey) => handleKeyPress(pressedKey.key)}
              />
            ) : (
              <h3 
                onClick={() => setIsEditingTitle(true)}
                className={
                "text-lg font-semibold text-gray-800 dark:text-white cursor-pointer" + 
                " hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              }>
                {column.title}
              </h3>
            )}
            <Button
              onClick={() => deleteColumn(column.id)} 
              className={
                "h-9 w-9 p-0 text-red-600 hover:text-red-700 hover:bg-pink-100" + 
                " dark:text-gray-300 dark:hover:text-red-400 dark:hover:bg-gray-600 rounded-full"
              }
            >
              <Trash2 className="w-5 h-5"/>
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {column.tasks.length} {" "}
              {column.tasks.length === 1 ? "task" : "tasks"}
            </span>
            <Button
              onClick={() => addTask(column.id)}
              className={
                "h-7 px-2 rounded-full text-blue-600 hover:bg-blue-50" + 
                " dark:text-blue-400 dark:hover:bg-gray-600"
              }
            >
              <Plus className="w-3 h-3 mr-1"/>
              <p className="text-sm font-normal">Add</p>
            </Button>
          </div>
        </div>
        <div className="p-3 overflow-y-auto min-h-0 flex-1">
          <div className="space-y-3">
            {column.tasks.map((task, index) => (
              <KanbanTask 
                key={task.id}
                task={task}
                index={index}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanColumn;