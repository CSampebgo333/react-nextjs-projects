import KanbanTaskViewer from "./KanbanTaskViewer";
import KanbanTaskEditor from "./KanbanTaskEditor";
import { useState } from "react";

const KanbanTask = ({ task, index, updateTask }) => {

  const [isEditingTask, setIsEditingTask] = useState(false);

  const [tempTaskContent, setTempTaskContent] = useState(task.content);

  const handleTaskUpdate = () => {
    updateTask(task.id, tempTaskContent);
    setIsEditingTask(false);
  }

  const handleTaskEditCancel = () => {
    setTempTaskContent(task.content);
    setIsEditingTask(false);
  }


  return (
    <div className={
      "group bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-600" + 
      " shadow-sm hover:shadow-md transition-all duration-300 rounded-lg p-2"
    }>
      <div>
        {isEditingTask? (
          <KanbanTaskEditor 
            taskId={task.id}
            handleTaskUpdate={handleTaskUpdate}
            handleTaskEditCancel={handleTaskEditCancel}
            tempTaskContent={tempTaskContent}
            setTempTaskContent={setTempTaskContent}
          />
        ) : (
          <KanbanTaskViewer 
            content={task.content} 
            createdAt={task.createdAt} 
            onEdit={() => setIsEditingTask(true)}
          />
        )}
      </div>
    </div>
  );
};

export default KanbanTask;