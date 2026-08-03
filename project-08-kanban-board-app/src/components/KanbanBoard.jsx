import KanbanColumn from "./KanbanColumn";
import Button from "./ui/Button";

const KanbanBoard = () => {
  return (
    <div className={
      "min-h-screen w-full bg-gray-100 dark:bg-gray-900" + 
      " transition-colors"
    }>
      <h1>Kanban Board</h1>
    </div>
  );
};

export default KanbanBoard;