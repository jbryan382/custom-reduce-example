function main() {
  let numbers = [1, 2, 3, 4, 5]

  // Custom Solution

  function _reduce(reducer, array, initialValue) {
    // initializing value, and startingIndex
    let value
    let startingIndex
    // If the user didn't provide a starting value
    if (initialValue === undefined) {
      // Assign the starting value to the first instance of the array
      value = array[0]
      // Increase the starting index to 1 to avoid recounting the first index
      startingIndex = 1
    } else {
      // Set the value to the initial value from the call
      value = initialValue
      // Set the starting index to 0
      startingIndex = 0
    }
    // For the length of the array
    for (let i = startingIndex; i < array.length; i++) {
      // set our current value to the i
      let currentValue = array[i]
      // call our reducer function passed into the _reduce and pass the value and CurrentValue
      value = reducer(value, currentValue)
    }
    // return the total value
    return value
  }

  // Calling custom _reduce function and passing through the reducer, and the array of numbers
  const sumOfNumbersCustom = _reduce(
    (initialValue, current) => initialValue + current,
    numbers
  )

  console.log(sumOfNumbersCustom)

  // Regular reduce
  let numTotal = numbers.reduce((acc, total) => acc + total)
  console.log(numTotal)
}

document.addEventListener('DOMContentLoaded', main)
