/* const num = null;

console.log(num ?? 210 ?? 21)
 */

/* let i = 1, j = 10

while(i <= 10 && j >= 0) {
    console.log(i, j);
    i++; j--;
} */

/* let superHeroes = ["spiderman", "thor", "hulk", "x-men"]

let i = 0;

while (i < superHeroes.length) {
    let mostPowerful = "hulk"
    if (superHeroes[i] === mostPowerful) {
        console.log(`the toughest is ${superHeroes[i]}`);
        break;
    }
    else console.log(superHeroes[i]);
    i++;
} */

/* const greeting = "Hello world!"

for (const greet of greeting) {
    if(greet === " ") {
        console.log("meri jaan");
        continue
    }
    else console.log(greet);
} */

/* const mpp = new Map();

mpp.set('key1', 'val1')
mpp.set('key2', 'val2')
mpp.set('key3', 'val3')
mpp.set('key4', 'val4')
mpp.set('key5', 'val5')

for (const [key, val] of mpp) {
    console.log(`${key} : ${val}`);
} */

/* const myObj = {
    first : "eng",
    sec : "ben",
    third: "bio",
    fourth : "chem",
    fifth : "nut"
}

for (const key in myObj) {
    console.log(`${key} : ${myObj[key]}`);
} */

/* const countries = ['india', 'pakistan', 'canada', 'jamaica', 'france', 'germany']

countries.forEach( (country, index, arr) => {
    if(index === countries.length - 1)
        console.log(country, index, arr);
    else console.log(country, index);
} ) */


/* const classEight = [
    {
        studentName: "suhana",
        favSub: "math"
    },
    {
        studentName: "rahul",
        favSub: "geography"
    },
    {
        studentName: "madhav",
        favSub: "computer"
    }
]

classEight.forEach((student) => {
    console.log(`${student.studentName}'s favourite subject is: ${student.favSub}`);
}) */

/* const nums = [1, 2, 3, 4, 5, 6, 7, 8]

const greaterNums = nums.filter( (num) => {
    return num > 5
}) // if we open scope i.e.'{}' we have to explicitly use return keyword to return the value, but if we don't, then we can
  // ignore using the return keyword.
console.log(greaterNums);
 */

const mynums = [1, 2, 3, 4, 5, 6, 7, 8]

// const modNums = mynums.map( (num) => num + 10)

// console.log(modNums);

/* const modinum = mynums.forEach((num) => {
    num += 10;
    return num;
})
console.log(modinum); */

const nums = [1, 2, 3 ,4 ,5,6,7]

const total = nums.reduce((acc, num)=>acc+num,0)
console.log(total);


