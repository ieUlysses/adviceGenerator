import { React, useContext } from 'react'

import icondice from "../../Media/icon-dice.svg"

import Context from '../../Context/Context'

// StylesImport
import "../../Styles/Button.css"


function Button() {
    const context = useContext(Context)
    const { setId } = context
    const update = () => {

        let x = Math.floor((Math.random() * 223) + 1)

        setId(x)
    }

    return (
        <>
            <button className="button-wrapper" role={'button'} onClick={update}>
                <img className='button' src={icondice} alt="dice btn" />
            </button>
        </>
    )
}

export default Button