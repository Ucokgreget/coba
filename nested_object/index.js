class Person {
    constructor(firstName, lastName, age, ...address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = new Address(...address)

    }
}



class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person = new Person("Luqman", "Al-Fauzan", 21, "Tanjung Barangan",
                                                     "Palembang",
                                                     "Indonesia");

console.log(`Nama: ${person.firstName} ${person.lastName}`)
console.log(`Umur: ${person.age}`)

for (const property in person.address){
    console.log(person.address[property])
}

