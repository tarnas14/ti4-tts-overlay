import React from 'react'

export const PublicObjectives = ({ objectives }) => {
    if (!objectives) {
        return null
    }

    return <div className='PublicObjectives'>
        {Boolean(objectives.pI.length) && <><p>stage I objectives:</p>
        <ul>
          {objectives.pI.map(pI => <li key={pI.slug}>{pI.slug} (scored: {pI.scoredBy.join(', ')})</li>)}
        </ul></>}

        {Boolean(objectives.pII.length) && <><p>stage II objectives:</p>
        <ul>
            {objectives.pII.map(pII => <li key={pII.slug}>{pII.slug} (scored: {pII.scoredBy.join(', ')})</li>)}
        </ul></>}
    </div>
}
