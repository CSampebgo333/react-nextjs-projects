import { useState } from "react";
import KanbanColumn from "./KanbanColumn";
import Button from "./ui/Button";
import { Plus } from "lucide-react";
import { DragDropContext } from "@hello-pangea/dnd";

const KanbanBoard = () => {

  const defaultColumns = [
    {
      id: "todo",
      title: "To Do",
      tasks: [
        {
          id: "task-1",
          content: "Design new landing page",
          createdAt: new Date("2025-07-25T00:00:00"),
        },
        {
          id: "task-2",
          content: "Set up database schema",
          createdAt: new Date("2025-07-25T00:00:00"),
        },
      ],
    },
    {
      id: "in-progress",
      title: "In Progress",
      tasks: [
        {
          id: "task-3",
          content: "Implement user authentication. 'This is mock data used to design the focus mode fonction of a task in edit mode'Got it?",
          createdAt: new Date("2025-07-25T00:00:00"),
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      tasks: [
        {
          id: "task-4",
          content: "Create project structure",
          createdAt: new Date("2025-07-25T00:00:00"),
        },
      ],
    },
  ];

  const [columns, setColumns] = useState(defaultColumns);

  const addColumn = () => {
    setColumns(
      [
        ...columns,
        {id: `column-${crypto.randomUUID()}`, title: "New Column", tasks: []}
      ]
    )
  };

  const deleteColumn = (columnId) => {
    setColumns(columns.filter((column) => column.id !== columnId));
  };

  const addTask = (columnId) => {

    const newTask = {
      id: `task-${Date.now()}`,
      content: "New Task",
      createdAt: new Date(),
    }

    setColumns(columns.map((col) => 
      col.id === columnId? 
      {...col, tasks: [...col.tasks, newTask]} : col
    ))

  }

  const updateColumnTitle = (columnId, newTitle) => {
    setColumns(columns.map((col) => 
      col.id === columnId? {...col, title: newTitle} : col
    ));
  };

  const updateTask = (taskId, newContent) => {
    setColumns(columns.map((col) => ({
      ...col,
      tasks: col.tasks.map((task) => 
        task.id === taskId? {...task, content: newContent} : task,
      )
    })))
  }


  const deleteTask = (taskId) => {
    setColumns(columns.map((col) => ({
      ...col,
      tasks: col.tasks.filter((task) =>
        task.id !== taskId),
    })))
  }

  const handleDragEnd = (result) => {

    const { destination, source } = result;
    if(!destination) return;
    if(destination.droppableId === source.droppableId && destination.index === source.index) return;

    const sourceColumn = columns.find((col) => col.id === source.droppableId);
    const destinationColumn = columns.find((col) => col.id === destination.droppableId);
    if (!sourceColumn || !destination) return;

    const sourceTasks = [...sourceColumn.tasks];
    const [movedTask] = sourceTasks.splice(source.index, 1);
    
    if (sourceColumn === destinationColumn) {

      sourceTasks.splice(destination.index, 0, movedTask)
      setColumns(columns.map((col) => 
        col.id === source.droppableId? {...col, tasks: sourceTasks} : col,
      ));

    } else {

      const destinationTasks = [...destinationColumn.tasks];
      destinationTasks.splice(destination.index, 0, movedTask);

      setColumns(columns.map((col) => {
        if (col.id === destination.droppableId) {
          return {...col, tasks: destinationTasks};
        } else if (col.id === source.droppableId){
          return {...col, tasks: sourceTasks};
        } else {
          return col;
        }
      }))
    }
  }
  

  return (
    <div className={
      "min-h-screen w-full bg-gray-100 dark:bg-gray-900" + 
      " transition-colors"
    }>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className={
          "flex gap-5 overflow-x-auto pb-7 px-7 w-full mt-3"
        }>
          {columns.map((column) => (
            <KanbanColumn 
              key={column.id}
              column={column}
              deleteColumn={deleteColumn}
              addTask={addTask}
              updateColumnTitle={updateColumnTitle}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))}

          <div className="shrink-0">
            <Button
              onClick={addColumn}
              className={
                "h-12 rounded-md px-5 bg-white/50 dark:bg-gray-700 dark:text-white " + 
                " hover:bg-white/80 dark:hover:bg-gray-600 border-dashed" + 
                " border-2 border-gray-200 dark:border-gray-500" +
                " hover:border-gray-400 transition-all duration-300"
              }
            >
              <Plus 
                className="w-5 h-5 mr-2"
              />
              Add Column
            </Button>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;