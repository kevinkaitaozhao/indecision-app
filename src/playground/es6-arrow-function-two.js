// arguments objects - no longer boud with arrow functions

const add = (a, b) => {
  // console.log(arguments)
  return a + b
}
console.log(add(55, 1))

// this keyword - no longer bound  with arrow functions

const user = {
  name: 'Kevin Zhao',
  cities: ['Los Angeles', 'Seattle', 'Vancouver'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city)
  }
}

console.log(user.printPlacesLived())

// Challenge

const multiplier = {
  numbers: [2, 10],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply())