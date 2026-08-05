import HelpStatus from "./components/HelpStatus";
import HelpForm from "./components/HelpForm";

const App = () => {
  return (
   <div 
    style={{
      fontFamily: "sans-serif",
      maxWidth: "600px",
      margin: "2rem auto" 
    }}
   >
    <h1>Need Help?</h1>
    <HelpStatus />
    <HelpForm />
   </div>
  );
}

export default App;