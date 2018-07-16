class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `Hi, I am ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getDescription() { // override the parent class behavior
    let description = super.getDescription()
    if(this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }

    return description
  }
}

class Traveler extends Student {
  constructor(name, age, major, homeLocation) {
    super(name, age, major)
    this.homeLocation = homeLocation
  }
  getDescription() {
    let greeting = super.getDescription()
    if(this.homeLocation) {
      greeting += ` He is visiting from ${this.homeLocation}.`
    }
    return greeting
  }
}

const me = new Traveler('Kevin Zhao', 25, 'Economics', 'Seattle')
console.log(me.getDescription())

const other = new Traveler()
console.log(other.getDescription())