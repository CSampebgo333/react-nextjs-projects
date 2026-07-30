

const TempComponent = ({ deck, gridSize, moves, matches, resetCounter, setMoves, setMatches }) => {
    return (
        <div>
            <div className="fixed bottom-4 left-4 space-y-2 z-50">
                <button onClick={() => 
                {
                    const grid = [];
                    for (let i = 0; i < deck.length - 1; i += gridSize ){
                    const row = deck.slice(i, i + gridSize);
                    grid.push(row);
                    };

                    console.log(`Deck Grid: (${gridSize}x${gridSize}):`);

                    grid.forEach((row, index) =>
                    console.log(`Row ${index + 1}:`, row.join(" ")))
                }
                }
                className="px-3 py-1 bg-blue-500 text-white rounded shadow cursor-pointer"
                >
                Log Deck
                </button>
                <button onClick={() => console.log(`Grid: ${gridSize}\nMoves: ${moves}\nMatches: ${matches}\nResetCount: ${resetCounter}`)}
                    className="px-3 py-1 bg-green-500 text-white rounded shadow cursor-pointer"
                >
                Log State
                </button>
                <button onClick={() => setMoves((prev) => prev + 1)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded shadow cursor-pointer"
                >
                +1 Move
                </button>
                <button onClick={() => setMatches((prev) => prev + 1)}
                    className="px-3 py-1 bg-pink-500 text-white rounded shadow cursor-pointer"
                >
                +1 Match
                </button>
                
            </div>
        </div>
    )
}

export default TempComponent;