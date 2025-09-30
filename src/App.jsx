import Die from "./Die"
import { useState } from "react"

export default function App() {
  const [nums, setNums] = useState(generateAllNewDice())

  function generateAllNewDice(){
    let numArr = []
    let i = 0
    while (i < 10){
        numArr.push(1+Math.floor(Math.random() * 6))
        i++
    }
    return numArr
  }

  function generateNewDice() {
        let newArr = generateAllNewDice()
        setNums(newArr)
    }
  
  const diceElem = nums.map(index =><Die value={index}/>)

    return (
        <main>
            <div className="dice-container">
                {diceElem}
            </div>
            <button className="roll-dice" onClick={generateNewDice}>Roll Dice</button>
        </main>
    )
}
