import { useState } from "react"
import Die from "./Die"

export default function App() {
    const [dice, setDice] = useState(() => generateAllDice())

    const diceElements = dice.map(die =>
        <Die value={die} />
    )
    function generateAllDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }
    console.log(generateAllDice())

    return <main>
                <div className="dice-container">
                    {diceElements}
                </div>
            </main>
}