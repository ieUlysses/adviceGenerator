import "./Styles/Container.css"
import Card from './Componants/Card/Card';

import { React, useContext } from "react";

import Context from "./Context/Context";



function App() {

  const context = useContext(Context);
  const { id, setId, slip } = context;

  const update = () => {
    setId(document.getElementById("numberInput").value)
  }

  console.log(slip.advice)


  return (
    <>
      <div className='container'>

        {/* Added test below to bugfix and test context */}
        <input type="number" name="numberInput" id="numberInput" max="20" min="1" step="1" />
        <button type="button" onClick={update}>sumbit</button>

        <h1>{slip.slip.advice}</h1>


      </div>
    </>
  );
}

export default App;
