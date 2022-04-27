import React from 'react';
import './Game.css';
import { useState } from 'react';
import Board from './Board';
import Inputs from './Inputs';

//Other Useful Hooks
//useEffect - almost same as componentDidMount
//useRef - basically stores a ref to something that you'll a lot

export default function Game({rows, cols }) {
    const [dimensions, setDimensions] = useState( { rows: rows, columns: cols });
    const [playerTurn, setPlayerTurn] = useState('X');
    const [board, setBoard] = useState(
        () => {
            let board = [...Array(cols).keys()].map(() => []);
            return board;
        }
    )
    // useEffect(() => {
    //     fetchData();
    // }, [])

    return (
        <div>
            <h1>Game</h1>
            <Inputs dimensions={dimensions} setDimensions={setDimensions} setBoard={setBoard}/>
            <Board rows={dimensions.rows}
                columns={dimensions.columns}
                board={board}
                setBoard={setBoard}
                playerTurn={playerTurn}
                setPlayerTurn={setPlayerTurn}
            />
        </div>
    );
}