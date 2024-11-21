class Animal {

    constructor(animalName) {
        this.animalName = animalName
    }

    walk() {
        console.log(this.animalName + 'walking')
    }
}

class Cat extends Animal {
    
    constructor(animalName) {
        super(animalName)
        this.animalName = animalName
    }
}

const catObj = new Cat('Catname');
console.log(catObj.walk())