/* class Person {
    #gender = 'male';
    constructor(name) {
        this.name = name;
    }
    nationality = 'indian';
    address = 'bishnupur';
    pin = 722122;

    getUserAdd() {
        // return(`address: ${this.address}`);
        console.log(this);
    }
};

const person = new Person("Sujal");
// console.log(person.name);
// console.log(person.nationality);
person.getUserAdd() */;

function person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

const person1 = new person('sujal', 19, 'male');
const person2 = new person('sampriti', 17, 'female')

console.log(person1);
console.log(person2);






