import React, {useCallback, useState} from 'react'

export const ModConfig = ({ gameKey: initialGameKey, setupGame }) => {
    const [gameKey, setGameKey] = useState(initialGameKey || '')

    const handleChange = useCallback((event) => {
        const value = event.target.value

        setGameKey(value)
    }, [])

    const handleSubmit = useCallback(() => setupGame(gameKey), [gameKey, setupGame])

    return <div className='ModConfig'>
        <input type="text" value={gameKey} onChange={handleChange} placeholder="game key" />
        <button onClick={handleSubmit}>start listening for changes</button>
    </div>
}
