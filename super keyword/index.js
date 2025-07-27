class Animal{

    constructor(name, age){
        this.name= name;
        this.age = age;
    }

    move(speed){
        console.log(`${this.name} moves at speed ${speed} km/h`)
    }
}

class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age)
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} is run`)
        super.move(this.runSpeed)
    }
}


class Fish extends Animal{

    constructor(name, age, swimSpeed){
        super(name, age)
        this.swimSpeed = swimSpeed;
    }  
    
    swim(){
        console.log(`This ${this.name} is swim`)
        super.move(this.swimSpeed)
    }
}


class Hawk extends Animal{

    constructor(name, age, flySpeed){
        super(name, age)
        this.flySpeed = flySpeed;
    }    

    fly(){
        console.log(`This ${this.name} is fly`)
        super.move(this.flySpeed)
    }
}

const rabbit = new Rabbit('Rabbit', 2, 20);
const fish = new Fish("fish", 3, 14)
const hawk = new Hawk("hawk", 4, 32)



console.log(rabbit.name)
rabbit.run()
fish.swim()
hawk.fly()
