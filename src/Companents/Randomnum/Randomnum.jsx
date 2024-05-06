import React, { useState } from 'react'

export const Randomnum = () => {
    const [state, setState] = useState(0);

    const ButtonClick = () => {
        setState(() => Math.floor(Math.random() * 10))
    }
    return (
        <div>
            <button type='button' onClick={ButtonClick}></button>
            <p>{state}</p>
        </div>
    )
}
