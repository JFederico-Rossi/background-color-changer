import { useState } from "react"
import './Button.css'

const Button = () => {

    const [color, setColor] = useState ('lightgrey')

  return (
    <>
        <div className='main-container' style={{backgroundColor: color}}>
        <div className='container'>
            <div className='button-cont'>
                <button onClick={()=> setColor('rgba(0, 128, 0, 0.403)')}
                className='button-g'>Green</button>
                <button onClick={()=> setColor('rgba(0, 0, 255, 0.378)')}className='button-b'>Blue</button>
                <button onClick={()=> setColor('rgba(255, 166, 0, 0.522)')}className='button-o'>Orange</button>
            </div>
        </div>
        </div>
    </>
  )
}

export default Button