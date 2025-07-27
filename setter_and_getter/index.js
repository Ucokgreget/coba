/*
class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Woi harus angka positif kocak")
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Woi harus angka positif kocak")
        }
    }

    get width(){
        return this._width.toFixed(1)
    }

    get height(){
        return this._height.toFixed(1)
    }

    get area(){
        return (this._width * this._height).toFixed(1);
    }
}

const rectangle = new Rectangle(2,2);

console.log(rectangle.width)
console.log(rectangle.height)
console.log(rectangle.area)

*/

class Person {

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("woi masukkin nama yang bener")
        }
    }

       set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("woi masukkin nama yang bener")
        }
    }

       set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("woi masukkin umur yang bener")
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return `${this._firstName} ${this._lastName}`;
    }

    get age(){
        return this._age
    }

    
}


const person = new Person("Muhammad", "Luqman", 21)

console.log(person.firstName)
console.log(person.lastName)
console.log(person.fullName)
console.log(person.age)