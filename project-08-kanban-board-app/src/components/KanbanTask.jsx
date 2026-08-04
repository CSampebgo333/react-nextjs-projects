import KanbanTaskViewer from "./KanbanTaskViewer";
import KanbanTaskEditor from "./KanbanTaskEditor";
import { useState, useRef, useEffect } from "react";
import { Draggable } from "@hello-pangea/dnd";

const KanbanTask = ({ task, index, updateTask, deleteTask }) => {

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

  const textAreaRef = useRef(null);

  useEffect(() => {
    if (isEditingTask && textAreaRef.current){
      const textArea = textAreaRef.current;
      textArea.focus();
      textArea.setSelectionRange(textArea.value.length, textArea.value.length);
      textArea.scrollTop = textArea.scrollHeight;
    }

  }, [isEditingTask])


  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps} 
          className={
          "group bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-600" + 
          " shadow-sm hover:shadow-md transition-all duration-300 rounded-lg p-2" + 
          `${
            snapshot.isDragging ? 
            "rotate-3 shadow-lg ring-2 ring-blue-300 ring-opacity-50" : ""
          }`
        }>
          <div className="relative">
            {isEditingTask ? (
              <KanbanTaskEditor 
                taskId={task.id}
                handleTaskUpdate={handleTaskUpdate}
                handleTaskEditCancel={handleTaskEditCancel}
                tempTaskContent={tempTaskContent}
                setTempTaskContent={setTempTaskContent}
                textAreaRef={textAreaRef}
                deleteTask={deleteTask}
              />
            ) : (
              <KanbanTaskViewer 
                content={task.content} 
                createdAt={task.createdAt} 
                onEdit={() => setIsEditingTask(true)}
                deleteTask={() => deleteTask(task.id)}
              />
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default KanbanTask;