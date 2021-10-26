import React, {useState} from 'react'

export const Overlay = ({ children, openLabel }) => {
    const [open, setOpen] = useState(false)

    if (open) {
        return <>
            {children}
            <button onClick={() => setOpen(false)}>close</button>
        </>
    }

    return <button onClick={() => setOpen(true)}>{openLabel || 'open'}</button>
}
