/* const mySymbol = Symbol("key1");

const myObj = {
    name: "sujal",
    phNo: 9907166931,
    email: "sujalthakkar@google.com",
    address: "Bishnupur",
    [mySymbol]: "key1"
};

// Object.freeze(myObj)
myObj.email = "sujalthakkar153@gmail.com"

 myObj.greeting = function() {
    console.log(`Hi, how are you, ${myObj.name}`);
}

myObj.greeting();

console.log(myObj); */

obj1 = {a: "s", b: "u"}
obj2 = {c: "j", d: "a", e: "l"}
obj3 = {f: "t", g: "h", h: "a", i: "k", j: "k", k: "a", l: "r"}

// const fullName = Object.assign({}, obj1, obj2, obj3);
const fullName = {...obj1, ...obj2, ...obj3}
// console.log(fullName);
fullName.allChar = "sujalthakkar";

const{allChar} = fullName;
console.log(allChar);








