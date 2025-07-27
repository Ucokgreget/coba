class Animal{
    alive = true;

    eat(){
        console.log(`${this.name} is eating`)
    }

    sleep(){
        console.log(`${this.name} is sleeping`)
    }
}

class Rabbit extends Animal{
    name = "rabbit";
}

class Cat extends Animal{
    name = "cat";
    run(){console.log(`${this.name} is running`)}
}

class Fish extends Animal{
    name = "fish";
    swim(){console.log(`${this.name} is swimming`)}
}

class Bird extends Animal{
    name = "bird"
    fly(){
        console.log(`${this.name} is flying`)   
    }
}

const kelinci = new Rabbit();
const kucing = new Cat();
const ikan = new Fish();
const burung = new Bird();



kelinci.eat();
kucing.run()
console.log(ikan.name)
kucing.sleep();
burung.fly();