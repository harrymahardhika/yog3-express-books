class Animal {
  constructor(name) {
    this.name = name
  }

  move() {
    return `${this.name} is moving`
  }

  makeSound() {
    return `${this.name} is making sound`
  }
}

class Bird extends Animal {
  move() {
    return `${this.name} is flying`
  }

  makeSound() {
    return `${this.name} is cuit-cuit-ing`
  }
}
class Crocodile extends Animal {
  makeSound() {
    return `${this.name} bilang aku sayang kamu, tapi bohong, engga bisa dibuktiin`
  }
}
class Cricket extends Animal {}

const cucak = new Bird('cucakrowo')
console.log(cucak.move())
console.log(cucak.makeSound())

const pepy = new Crocodile('pepy')
console.log(pepy.move())
console.log(pepy.makeSound())

const jangkrik = new Cricket('jangkrik')
console.log(jangkrik.move())
