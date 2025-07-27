/*
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return 2 * radius;
    }
    static getKeliling(radius){
        return 2 * this.PI * radius
    }
    static getLuas(radius){
        return this.PI * radius * radius
    }
}

console.log(MathUtil.PI)
console.log(MathUtil.getDiameter(10))
console.log(MathUtil.getKeliling(10))
console.log(MathUtil.getLuas(10))
*/

class User{
    static userCount = 0

    constructor (username){
        this.username = username;
        User.userCount++
    }

    static getUserCount(){
        return User.userCount
    }

    sayHello(){
        console.log(`Halo semuanya! Nama saya ${this.username}`)
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Kebal Crowd Control")
const user3 = new User("Bjir")


user1.sayHello();
user2.sayHello();
user3.sayHello();

console.log(`Woi ada ${User.userCount} user yang online sekarang`)
console.log(User.userCount)