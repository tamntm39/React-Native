// import React, { useReducer, useState } from "react";
// import { calculateWinner } from "../../helpers";
// import Board from "./Board";
// import "./GameStyles.css";
// //gtri khoi tao 
// const initialState = {
//   board: Array(9).fill(null),
//   xIsNext: true,
// };
// const gameReducer = (state, action) => {
//     switch (action.type) {
//         case 'CLICK':
//             const {board, setBoard} = state;
//             const {index, winner} = action.payload();
//             if(winner || board[index]) return;
//             const nextState = JSON.parse(JSON.stringify(state));
//             return nextState;
//             break;
    
//         default:
//             break;
//     }
//   return state;
// };
// const Game = () => {
// //   const [board, setBoard] = useState(Array(9).fill(null));
// //   const [xIsNext, setXIsNext] = useState(true);

//   //useReducer
//   const [state, dispatch] = useReducer(gameReducer, initialState);
//   //const action = {type: 'CLICK', payload:{}}
//   //dispatch({type: 'CLICK'})
//   //   const [state, setState] = useState({
//   //     board: Array(9).fill(null),
//   //     xIsNext: true,
//   //     name: "tam",
//   //   })

//   const winner = calculateWinner(state.board);
//   const handleClick = (index) => {
//     // const boardCopy = [...state.board];
//     // if (winner || boardCopy[index]) return;
//     dispatch({
//       type: "CLICK",
//       payload: {
//         index,
//         winner,
//       },
//     });
// //     boardCopy[index] = xIsNext ? "X" : "O";
// //     setBoard(boardCopy);
// //     setXIsNext(!xIsNext);
//   };
//   const handleResetGame = () => {
//     dispatch({
//         type: 'RESET',
//     })
//     // setBoard(Array(9).fill(null));
//     // setXIsNext(true);
//   };
//   return (
//     <div>
//       <Board cells={state.board} onClick={handleClick}></Board>
//       {winner && <div className="game-winner">Winner is {winner}</div>}
//       <button className="game-reset" onClick={handleResetGame}>
//         Reset game
//       </button>
//     </div>
//   );
// };

// export default Game;
import React, { useState } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./Board";
import "./GameStyle.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
