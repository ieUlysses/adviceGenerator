import { React, useContext } from 'react'
import Context from '../../Context/Context';

import "../../Styles/Text.css"



function Text() {

    const context = useContext(Context);
    const { slip } = context;

    return (
        <p className='textbody' >&#8220;{slip.slip.advice}&#8221;</p>
    )
}

export default Text