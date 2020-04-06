import React,  {useState}  from "react"
import Board from "./Board"
import {calculateWinner}  from "../helpers"


const styles = {
    width: '200px',
    margin: '20px auto',
    fontSize: '30px',
};

const Game= () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState (true)
    const winner = calculateWinner(board)

    const handleClick = i => {
        const boardCopy = [...board]
        if(winner || boardCopy[i]){
            return
        } else {
            boardCopy[i] = xIsNext ? "X" : "0"
            setBoard(boardCopy)
            setXisNext(!xIsNext)
        }
    }
    
    const jumpTo = () => {
        
    }
    
    const renderMoves = () => {
        return (
            <button style={styles} onClick={()=> setBoard(Array(9).fill(null))}>Start Game</button>
        )
    }

    return (
        <div>
            <Board squares={board} onClick={handleClick}/>
            <div style={styles}> 
                {winner ? "Winner: " + winner : "Next player: "  + (xIsNext ? 'X' : 'O')}
                <br />
                {renderMoves()}
            </div>        
            </div>
    )
}

export default Game