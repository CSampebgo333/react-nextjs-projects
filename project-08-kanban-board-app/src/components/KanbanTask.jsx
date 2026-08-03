import KanbanTaskViewer from "./KanbanTaskViewer";
import KanbanTaskEditor from "./KanbanTaskEditor";
import { useState } from "react";

const KanbanTask = ({ task, index }) => {

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={
      "group bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-600" + 
      " shadow-sm hover:shadow-md transition-all duration-300 rounded-lg p-2"
    }>
      <div>
        {isEditing? (
          <KanbanTaskEditor taskId={task.id}/>
        ) : (
          <KanbanTaskViewer content={task.content} createdAt={task.createdAt} />
        )}
      </div>
    </div>
  );
};

export default KanbanTask;