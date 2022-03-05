import React from 'react'

import "../../Styles/Card.css"
import Text from '../Text/Text'
import Button from '../Button/Button'
import ID from '../ID/ID'


function Card() {
    return (
        <div className='card'>
            <ID />
            <Text />
            <Button />
        </div>
    )
}

export default Card