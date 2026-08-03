import Button from "./ui/Button";

const KanbanTaskViewer = ({ content, createdAt }) => {
  return (
    <>
      <div className={
        "text-sm text-gray-800 dark:text-gray-200 leading-relaxed cursor-text" +
        " hover:text-gray-900 dark:hover:text-white overflow-y-auto h-17.5 pr-1"
      }>
        {content}
      </div>

      <div className="text-xs text-gray-400 dark:text-gray-500 mt-3">
        Created at {new Date(createdAt).toLocaleDateString()}
      </div>
    </>
  );
};

export default KanbanTaskViewer;