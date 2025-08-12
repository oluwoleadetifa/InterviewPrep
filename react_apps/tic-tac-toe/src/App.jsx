import Square from "./components/Square"
import { useState } from "react"
import './App.css'

/* you'll notice I created a component called square,
this is to ensure that the squares are their own component, doing their own thing.
export default shows what function you want to reuse in other files.
To create your body to be bonita like mine, you can use vanlla css or use tailwindcss
I'm not use tailwind because I don't really need to for this project.
*/



export default function Board() {  
  const [squares, setSquares] = useState([Array(9).fill(null)])
  const [xIsNext, setXIsNext] = useState(true)
  // const [ winner, setWinner] = useState(null)

  /* You will see me use arrow functions instead of this, that is because
  arrow functions are more concise and easier to read. Also the this referencing,
  and i can also do argument unpacking with them. */

  const calculateWinner = (squares) => {
    // I looked at all possible ways to win tic-tac-toe, once I found a winner, GGs
    const lines = [
      [0, 1, 2],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
    
  function handleClick(e, i) {
    /* e is an event listener and I am using it to get certain information from tags i interact with
     in this case, I interacted with button tag, and then I used t.target to get the tag,
     and .value to get the value I parsed into it. I stored that in value so I can check what's going on currently 
     I also created xisnext to be able to check whose turn it is and know what to play
    */
    const value = e.target.value
    const nextSquares = squares.slice() // this will create a copy of my array and sure I don't have issues

    //This ensures you can't change the value of a filled square
    if (value === "X" || value === "O" || calculateWinner(squares)) { 
      return;
    }
    else {
      if (xIsNext) {
        nextSquares[i] = "X"
      } else {
        nextSquares[i] = "O"
      }
      
      setSquares(nextSquares)
      setXIsNext(!xIsNext)
    }
  }
  const winner = calculateWinner(squares)
  let status;
  if (winner) {
    status = `Player ${winner} wins!`;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
   }
  return (  
    <>
    <div className="status">{status}</div>
    <div className="board">
      <div className="board-row">
        <Square value={squares[0]} handleClick={(e)=>handleClick(e, 0)}/>
        <Square value={squares[1]} handleClick={(e)=>handleClick(e, 1)}/>
        <Square value={squares[2]} handleClick={(e)=>handleClick(e, 2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} handleClick={(e)=>handleClick(e, 3)}/>
        <Square value={squares[4]} handleClick={(e)=>handleClick(e, 4)}/>
        <Square value={squares[5]} handleClick={(e)=>handleClick(e, 5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} handleClick={(e)=>handleClick(e, 6)}/>
        <Square value={squares[7]} handleClick={(e)=>handleClick(e, 7)}/>
        <Square value={squares[8]} handleClick={(e)=>handleClick(e, 8)}/>
      </div>
    </div>
    </>
  )
}