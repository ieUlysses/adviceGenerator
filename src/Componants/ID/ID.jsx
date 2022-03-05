import { React, useContext } from 'react'
import Context from "../../Context/Context"


function ID() {

    const context = useContext(Context)
    const { id } = context

    return (
        <>
            <h1>
                {id}
            </h1>
        </>
    )
}

export default ID