import Parent from "./components/Parent";
import { UserContext } from "./contexts/UserContext";

const App = () => {

  const user = {name: "Clément"}

  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
}

export default App;