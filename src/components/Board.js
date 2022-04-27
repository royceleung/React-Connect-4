import './Board.css';
import Piece from './Piece';


export default function Board({ board, rows, columns, setBoard, playerTurn, setPlayerTurn }) {

    const handleClick = index => {
        setBoard(prev => {
            let board = prev.slice();
            let column = board[index].slice();
            column.push(playerTurn);
            board[index] = column;
            return board;
        });

        setPlayerTurn(prev => {
            return prev === 'X' ? 'O' : 'X';
        });
    };
    return (
        <div className="board-container">
        {
            [...Array(columns).keys()].map((index) => {
                return <div className="game-column" key={index} onClick={() => handleClick(index)}>{
                    [...Array(rows).keys()].map((index2) => {
                        return <div className="game-cell" key={index2}>{
                            <Piece color={board[index] && board[index][index2]}/>                            
                        }</div>
                    })
                }</div>
            })
        }
        </div>
    );
}