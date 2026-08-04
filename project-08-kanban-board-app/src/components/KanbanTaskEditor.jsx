import { Trash2 } from "lucide-react";
import Button from "./ui/Button";

const KanbanTaskEditor = ({ 
  taskId, 
  tempTaskContent, 
  setTempTaskContent, 
  handleTaskUpdate, 
  handleTaskEditCancel, 
  textAreaRef, 
  deleteTask 
}) => {

  const handleKeyPress = (e) => {

    if (e.key === "Enter" && e.ctrlKey) {
      e.preventDefault();
      handleTaskUpdate();
    } else if (e.key === "Escape") {
      handleTaskEditCancel();
    }
  };


  return (
    <div className="space-y-2">
      <textarea
        id={`${taskId}`}
        ref={textAreaRef}
        value={tempTaskContent}
        onChange={(change) => setTempTaskContent(change.target.value)}
        autoFocus
        onBlur={handleTaskUpdate}
        onKeyDown={handleKeyPress}
        className={
          "w-full resize-none min-h-17.5 rounded-md border border-blue-200 text-sm px-3 py-2" + 
          " dark:border-blue-500 bg-white dark:bg-gray-800 dark:text-gray-100" + 
          " focus:outline-none focus:ring-2 focus:ring-blue-400"
        }
      />
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Press Ctrl+Enter to save, Escape to discard.
        </p>
        <Button 
          onClick={() => deleteTask(taskId)}
          onMouseDown={(e) => e.preventDefault()}
          className={
            "p-1 h-5 w-5 rounded-full text-red-600 hover:text-red-700 hover:bg-pink-100" + 
            " dark:text-gray-300 dark:hover:text-red-400 dark:hover:bg-gray-600" +
            " translate-y-0.5"
          }
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default KanbanTaskEditor;