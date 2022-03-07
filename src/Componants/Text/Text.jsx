import { React, useContext } from 'react'
import Context from '../../Context/Context';

import "../../Styles/Text.css"



function Text() {

    const context = useContext(Context);
    const { slip } = context;

    return (
        <p className='textbody' >{slip.slip.advice}</p>
    )
}

export default Text