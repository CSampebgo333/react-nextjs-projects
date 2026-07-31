import { useRef } from "react";
import Card from "./Card";

const GameBoard = ({ gridSize, deck, setMoves, setMatches, resetKey }) => {

    const cardRefs = useRef([]);

    const firstCard = useRef(null);

    const secondCard = useRef(null);

    const lockBoard = useRef(false);

    const handleCardClick = (index) => {

        const card = cardRefs.current[index];

        if (!card || card.flipped || lockBoard.current) return;
        card.flip();

        if (!firstCard.current){
            firstCard.current = card;
            return;
        }
        secondCard.current = card;
        lockBoard.current = true;
        setMoves((prev) => prev + 1);

        if (firstCard.current.icon === secondCard.current.icon){
            firstCard.current = null;
            secondCard.current = null;
            lockBoard.current = false;
            setMatches((prev) => {
                if (prev + 1 === deck.length / 2){
                    const audio = new Audio("sounds/win.mp3");
                    audio.play()
                }
                return prev + 1;
            });
        } else {
            setTimeout(() => {
                firstCard.current.unFlip();
                secondCard.current.unFlip();
                firstCard.current = null;
                secondCard.current = null;
                lockBoard.current = false;
            }, 1000)
        }
    }

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
                    ref={(card) => (cardRefs.current[index] = card)}
                    onClick={() => handleCardClick(index)}
                />
            ))}
        </div>
    )
}

export default GameBoard;