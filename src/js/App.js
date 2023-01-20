import { nanoid } from "nanoid"

let dice = []

function generateRandomNumbers() {
  let numbers = []
  for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 6) + 1)
  }
  return numbers
}

function createDiceObj() {
  dice = generateRandomNumbers().map(number => ({
    id: nanoid(),
    value: number,
    isHold: false,
  }))
}
createDiceObj()

export default dice
