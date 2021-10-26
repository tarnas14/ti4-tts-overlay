import React, {useState} from 'react'

export const Overlay = ({ children, openLabel }) => {
    const [open, setOpen] = useState(false)

    if (open) {
        return <div className='Overlay'>
            {children}
            <button className='close' onClick={() => setOpen(false)}>close</button>
        </div>
    }

    return <button onClick={() => setOpen(true)}>{openLabel || 'open'}</button>
}
