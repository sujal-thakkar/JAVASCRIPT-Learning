/* function func() {
    console.log(this);
}

func(); */

// const addTwoNums = (num1, num2) => {console.log(num1 + num2)}

// addTwoNums(3, 7)

// IIFE - Immediately Invoked Function Expression

(() => {
    console.log("new DB created");
})();

((name) => {
    console.log(`DB disconnected ${name}`);
})("sujal"); // we can pass arguements here as we are calling the function just like we would've done outside.
