import useFormInput from "./hooks/useFormInput";

const App = () => {

  const name = useFormInput("");
  const email = useFormInput("");

  return (
   <form>
    <div 
      style={{
        fontFamily: "sans-serif",
        maxWidth: "600px",
        margin: "2rem auto" 
      }}
    >
      <label>Name: </label>
      <input 
        type="text"
        {...name} 
      />
    </div>
    <div 
      style={{
        fontFamily: "sans-serif",
        maxWidth: "600px",
        margin: "2rem auto" 
      }}
    >
      <label>Email: </label>
      <input 
        type="email"
        {...email} 
      />
    </div>

   </form>
  );
}

export default App;