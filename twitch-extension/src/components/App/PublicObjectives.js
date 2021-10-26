import React from 'react'

export const PublicObjectives = ({ objectives }) => {
    if (!objectives) {
        return null
    }

    return <div className='PublicObjectives'>
        <p>stage I objectives:</p>
        <ul>
            {objectives.pI.map(pI => <li key={pI}>{pI}</li>)}
        </ul>

        <p>stage II objectives:</p>
        <ul>
            {objectives.pII.map(pII => <li key={pII}>{pII}</li>)}
        </ul>
    </div>
}
