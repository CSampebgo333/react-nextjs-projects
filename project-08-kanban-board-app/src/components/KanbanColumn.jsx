import KanbanTask from "./KanbanTask";
import Button from "./ui/Button";
import { useState } from "react";

const KanbanColumn = ({ column }) => {

  const [isEditingTitle, setIsEditingTitle] = useState(false);

  return (
    <div className={
      "shrink-0 w-80"
    }>
      <div className={
         "h-[85vh] overflow-hidden bg-white dark:bg-gray-800 shadow-sm rounded-lg" + 
        " border border-gray-200 dark:border-gray-700 flex flex-col transition-colors"
      }>
        <div className={
          "px-5 py-2 border-b border-gray-100 dark:border-gray-700" + 
          " bg-gray-50/50 dark:bg-gray-700"
        }>
          <div className="flex items-center justify-between mb-2">
            {isEditingTitle? (
              <input 
                type="text"
              >
              </input>
            ) : (
              <h3 className={
                "text-lg font-semibold text-gray-800 dark:text-white cursor-pointer" + 
                " hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              }>
                {column.title}
              </h3>
            )}
          </div>
        </div>
        <div className="p-3 overflow-y-auto min-h-0 flex-1">
          <div className="space-y-3">
            {column.tasks.map((task, index) => (
              <KanbanTask 
                key={task.id}
                task={task}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanColumn;