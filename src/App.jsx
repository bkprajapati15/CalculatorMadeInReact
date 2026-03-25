import React, { useState } from 'react'
import { evaluate } from "mathjs";
function App() {
  const [input, setInput] = useState("")
  const userInput = (value) => {
    setInput(input + value)

  }
  const calculation = () => {
    try {
      setInput(evaluate(input).toString())
    } catch (error) {
      setInput("error")
    }
  }
  const clear = () => {
    setInput("")
  }

  const eraser = () => {
    setInput(input.slice(0, -1))
  }

  return (
    <div>
      <div className='main-div'>
        <h2 className='heading'>Calculator</h2>
        <input type="text" className='input' value={input} placeholder='0' readOnly />
        <div className='btn-section'>
          <button className='eraser'onClick={() => { eraser() }}>⌫</button>
          <button className='clear' onClick={() => { clear() }}>c</button>
          <button onClick={() => { userInput("%") }}>%</button>
          <button onClick={() => { userInput("/") }}>/</button>
        </div>
        <div className='btn-section'>
          <button onClick={() => { userInput("7") }}>7</button>
          <button onClick={() => { userInput("8") }}>8</button>
          <button onClick={() => { userInput("9") }}>9</button>
          <button onClick={() => { userInput("*") }}>*</button>
        </div>
        <div className='btn-section'>
          <button onClick={() => { userInput("4") }}>4</button>
          <button onClick={() => { userInput("5") }}>5</button>
          <button onClick={() => { userInput("6") }}>6</button>
          <button onClick={() => { userInput("-") }}>-</button>
        </div>
        <div className='btn-section'>
          <button onClick={() => { userInput("1") }}>1</button>
          <button onClick={() => { userInput("2") }}>2</button>
          <button onClick={() => { userInput("3") }}>3</button>
          <button onClick={() => { userInput("+") }}>+</button>
        </div>
        <div className='btn-section'>
          <button className='zero' onClick={() => { userInput("0") }}>0</button>
          <button onClick={() => { userInput(".") }}>.</button>
          <button className='result' onClick={() => { calculation() }}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
