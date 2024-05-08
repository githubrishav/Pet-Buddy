import React, { useState } from 'react';
function Button() {
        const [mode, setMode] = useState(0);
        const HandlePlus = () => {
                setMode(mode + 1)
        }
        const HandleMinus = () => {
                setMode(mode - 1)
        }
        return (
                <div>
                        <h1>{mode}</h1>
                        <button onClick={HandlePlus}>Plus</button>
                        <button onClick={HandleMinus}>Minus</button>
                </div>
        )
}

export default Button