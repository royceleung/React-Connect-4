import React from "react";


export default function Input({dimensions, setDimensions, setBoard}) {
    const handleChange = ((item, event) => {
        const { value } = event.target;
        setDimensions({...dimensions, [item] : +value});
        setBoard(() => {
            let board = [...Array(dimensions.rows).keys()].map(() => []);
            return board;
        });
    })
    return (
        <div>
            <input value={dimensions.rows} onChange={(event) => {handleChange('rows', event)}}/>
            <input value={dimensions.columns} onChange={(event) => {handleChange('columns', event)}}/>
        </div>
    );
}