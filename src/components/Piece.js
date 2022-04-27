import './Piece.css';

const COLORS = {
    'X' : 'piece-red',
    'O' : 'piece-blue'
};

export default function Piece({ color }) {
    const cName = COLORS[color] || 'transparent';
    return (
        <div 
            className={`game-piece ${cName}`}
        ></div>
    );
}