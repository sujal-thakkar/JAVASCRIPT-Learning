/* const printData = (dataNo, nextData) => {
    setTimeout(() => {
        console.log('data', dataNo);
        if(nextData) {
            nextData();
        }
    }, 2000);
}

printData(1, () => {
    console.log('getting next data....');
    printData(2, () => {
        console.log('getting next data.....');
        printData(3, () => {
            console.log('getting next data.....');
            printData(4);
        });
    });
}); */

// ----------------------------------------------------------------------

/* hello(greet);

function hello(callback) {
    console.log("hello");
    callback()
}

function greet() {
    console.log("how're you");
} */

// -------------------------------------------------------------------------

/* sum2Num(display, 50, 50);

function sum2Num(callback, a, b) {
    let res = a + b;
    callback(res);
}

function display(valueToShow) {
    console.log(valueToShow);
} */

// --------------------------------------------------------------------------

cleanFloor(() => {
    takeOutTrash(() => {
        makeTea(() => {
            console.log('Yea! you\'ve finished all the chores!')
        })
    })
})

function cleanFloor(callback) {
    setTimeout(() => {
        console.log('foor is cleaned 🧹');
        callback();
    } ,2000)
}

function takeOutTrash(callback) {
    setTimeout(() => {
        console.log('Trash is taken out ♻️');  
        callback(); 
    },500)
}

function makeTea(callback) {
    setTimeout(() => {
        console.log('Tea is made ☕');
        callback();
    }, 1000)
}


