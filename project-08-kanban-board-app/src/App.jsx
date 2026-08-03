import KanbanBoard from "./components/KanbanBoard";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <KanbanBoard />
      <ThemeToggle />
    </div>
  )
}

export default App;