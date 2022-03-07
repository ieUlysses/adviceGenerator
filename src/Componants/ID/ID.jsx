import { React, useContext } from 'react'
import Context from "../../Context/Context"

import "../../Styles/Text.css"

function ID() {

    const context = useContext(Context)
    const { id } = context

    return (
        <>
            <p className='textid'>
                {id}
            </p>
        </>
    )
}

export default ID