import Die from "./Die"
import { useState } from "react"
import { nanoid } from "nanoid"

export default function App() {
  const [nums, setNums] = useState(generateAllNewDice())

  function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: nanoid()
            }))
    }

  function rollDice() {
        setNums(oldDice => oldDice.map(nums =>
            nums.isHeld === false ?
                {...nums, value: Math.ceil(Math.random() * 6)} :
                nums
        ))
    }

    function hold(id) {
        setNums(prevDice => prevDice.map(num =>
            num.id === id ?
            {...num, isHeld: !num.isHeld} : num
          ))
    }
  
  const diceElem = nums.map(dieObj => <Die 
    key={dieObj.id}
    id={dieObj.id}
    value={dieObj.value} 
    isHeld={dieObj.isHeld} 
    hold={hold}
    />)
  console.log(nums)

    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElem}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll Dice</button>
        </main>
    )
}
