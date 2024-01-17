import { useState } from "react"
import './Button.css'

const Button = () => {
    const [color, setColor] = useState ('lightgrey')
    document.title = `Color Changer: ${color}`

  return (
    <>
        <div className='main-container' style={{backgroundColor: color}}>
          <div className='container'>
              <div className='button-cont'>
                  <button onClick={()=> setColor('green')}
                  className='button-g'>Green</button>
                  <button onClick={()=> setColor('blue')}className='button-b'>Blue</button>
                  <button onClick={()=> setColor('orange')}className='button-o'>Orange</button>
              </div>
          </div>
        </div>
    </>
  )
}

export default Button