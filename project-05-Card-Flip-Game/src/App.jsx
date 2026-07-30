import { useState } from "react";
import Settings from "./components/Settings";
import ScoreBoard from "./components/Scoreboard";
import ResetButton from "./components/ResetButton";
import Graffiti from "./components/Graffiti";
import GameBoard from "./components/GameBoard";
import generateIcons from "./utils/generateIcons";
import shuffleDeck from "./utils/shuffleDeck";
import TempComponent from "./components/TempComponent";


const App = () => {

  const [gridSize, setGridSize] = useState(4);

  const createNewDeck = (size) => {

    const iconCount = (size * size) / 2;
    const icons = generateIcons(iconCount);
    const newDeck = [...icons, ...icons];

    return shuffleDeck(newDeck);
  }

  const [deck, setDeck] = useState(createNewDeck(4))

  const [moves, setMoves] = useState(0);

  const [matches, setMatches] = useState(0);

  const [resetCounter, setResetCounter] = useState(0);

  const ReInitializeGame = (size) => {
    setGridSize(size);
    setDeck(createNewDeck(size));
    setMoves(0);
    setMatches(0);
  }

  return (
    <div className={
      "h-screen flex flex-col p-4 max-w-3xl " +  
      "mx-auto bg-linear-to-bl from-cyan-100 via-blue-50 to-white" 
    }>
      <TempComponent 
        deck={deck} 
        gridSize={gridSize} 
        moves={moves} 
        matches={matches} 
        resetCounter={resetCounter}
        setMoves={setMoves}
        setMatches={setMatches} 
      />
      <h1 className="text-3xl font-bold text-center mb-4">Memory Match Mania</h1>
      {/* Settings: Let user include greed size and restart the game */}
      <Settings onGridChange={ReInitializeGame}/>

      {/* ScoreBoard: Contains number of moves, matches and total pairs */}
      <ScoreBoard moves={moves} matches={matches} total={deck.length / 2}/>

      {/* ResetButton: Contains the resetButton */}
      <ResetButton onReset={() => ReInitializeGame(gridSize)} />

      {/* GameBoard: Contains the Card */}
      <div className="grow">
        <GameBoard 
          gridSize={gridSize}
          deck={deck}
          setMoves={setMoves}
          setMatches={setMatches}
        />
      </div>

      {/* Graffiti: Show the Wining celebration while play the Wining Song */}
      {matches === deck.length / 2 && <Graffiti />}

    </div>
  );
}

export default App;