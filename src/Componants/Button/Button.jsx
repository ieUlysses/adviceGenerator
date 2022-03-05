import { React, useContext } from 'react'

import Context from '../../Context/Context'

// StylesImport
import "../../Styles/Button.css"


function Button() {
    const context = useContext(Context)
    const { setId } = context
    const update = () => {

        let x = Math.floor((Math.random() * 225) + 1)

        setId(x)
    }

    return (
        <button className='button' role={'button'} onClick={update}></button>
    )
}

export default Button