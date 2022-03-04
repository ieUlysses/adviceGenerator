import { React, useEffect, useState } from 'react'
import axios from "axios";

import Context from './Context';

function Provider(props) {

    const [id, setId] = useState(1)
    const [slip, setSlip] = useState({ slip: { id: 404, advice: "This is a shade embarassing" } })
    const baseURL = `https://api.adviceslip.com/advice/${id}`;

    useEffect(() => {
        const getASlip = async () => {
            const slip = await axios.get(baseURL)
            console.log(slip.data)
            setSlip(slip.data)
        }
        getASlip();
    }, [baseURL])

    return (
        <Context.Provider value={{ setId, slip, id }}>{props.children}</Context.Provider>
    )
}

export default Provider