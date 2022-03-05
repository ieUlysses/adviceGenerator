import { React, useContext } from 'react'
import Context from '../../Context/Context';

import "../../Styles/Text.css"



function Text() {

    const context = useContext(Context);
    const { slip } = context;

    return (
        <div className='text' >{slip.slip.advice}</div>
    )
}

export default Text