import Button from "./ui/Button";
import { Trash2 } from "lucide-react";

const KanbanTaskViewer = ({ content, createdAt, onEdit, deleteTask }) => {
  return (
    <>
      <div
        onClick={onEdit} 
        className={
          "text-sm text-gray-800 dark:text-gray-200 leading-relaxed cursor-text" +
          " hover:text-gray-900 dark:hover:text-white" + 
          " overflow-y-auto h-17.5 pr-1 thin-scrollbar"
      }>
        {content}
      </div>
      <Button 
          onClick={deleteTask}
          className={
            "p-1 h-5 w-5 rounded-full text-red-600 hover:text-red-700 hover:bg-pink-100" + 
            " dark:text-gray-300 dark:hover:text-red-400 dark:hover:bg-gray-600" +
            " translate-y-0.5 absolute top-0 right-0 opacity-0 group-hover:opacity-100"
          }
        >
          <Trash2 className="w-5 h-5" />
      </Button>
      <div className="text-xs text-gray-400 dark:text-gray-500 mt-3">
        Created at {new Date(createdAt).toLocaleDateString()}
      </div>
    </>
  );
};

export default KanbanTaskViewer;