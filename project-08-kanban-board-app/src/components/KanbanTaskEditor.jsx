import Button from "./ui/Button";

const KanbanTaskEditor = (

  { tempTaskContent, setTempTaskContent, handleTaskUpdate, handleTaskEditCancel }

) => {

  const handleKeyPress = (keyPressed) => {
    if (keyPressed.key === "Enter" && keyPressed.ctrlKey) {
      handleTaskUpdate();
    } else if (keyPressed.key === "Escape") {
      handleTaskEditCancel();
    }
  };

  return (
    <div className="space-y-2">
      <textarea 
        value={tempTaskContent}
        onChange={(change) => setTempTaskContent(change.target.value)}
        autoFocus
        onBlur={handleTaskUpdate}
        onKeyDown={handleKeyPress}
        className={
          "w-full resize-none min-h-17.5 rounded-md border border-blue-200 text-sm px-3 py-2" + 
          " dark:border-blue-500  bg-white dark:bg-gray-800 dark:text-gray-100" + 
          "  focus:outline-none focus:ring-2 focus:ring-blue-400"
        }
      >
      </textarea>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Press Ctrl+Enter to save, Escape to discard.{" "}
      </p>
    </div>
  );
};

export default KanbanTaskEditor;