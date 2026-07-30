import Card from "./Card";

const GameBoard = ({ gridSize, deck, setMoves, setMatches}) => {

    return (
        <div className="grid gap-2 h-full"
            style={{
                gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${gridSize}, 1fr)`
            }}
        >
            {deck.map((icon, index) => (
                <Card key={index} 
                    icon={icon}
                    gridSize={gridSize}
                    onClick={() => {console.log(`Card ${index + 1} clicked!`)}}
                />
            ))}
        </div>
    )
}

export default GameBoard;