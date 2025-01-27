//Promise type: 1

/* const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('promise func called');
        resolve();
    }, 2000);
})

promise.then(() => {
    console.log('promise reoslved/executed');
}) */

//Promise type: 2

/* new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async promise instantiated');
        resolve();
    }, 1000);
}).then(() => {
    console.log('promise executed');
}) */

//Promise type: 3

/* const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('passing value to then');
        resolve({name: 'sujal', email: 'sujaltkr@hotmail.com', phNo: 123344})
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user);
}) */
// -----------------------------------------------------------------------------------

// complete all the chores!
// Clean the floor
// Take out trash
// Make tea

/* function cleanFloor() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const floorCleaned = true;
            if(floorCleaned) resolve('floor is cleaned 🧹');
            else reject('You didn\'t clean floor')
        } ,2000)
    });
}

function takeOutTrash() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if(trashTakenOut) resolve('Trash is taken out ♻️');  
            else reject('You did\'nt took trash out')
        },500)
    })
}

function makeTea() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const madeTea = false;
            if(madeTea) resolve('Tea is made ☕');
            else reject('you didn\'t made tea')
        }, 1000)
    })
}

cleanFloor().then(value => {
    console.log(value);
    return takeOutTrash();
}).then(value => {
    console.log(value);
    return makeTea();
}).then(value => {
    console.log(value);
    console.log('You finished all the chores!');
}).catch((error) => {
    console.error(error);
    console.log('How dare you!')
}); */


/* const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const isValid = false;
        if(isValid) resolve({name: 'sujal', pass: 123});
        else reject(Error("error occured, failed to fetch data"));
    }, 2000);
})

async function myPromiseResult() {
    try {
        const response = await myPromise;
        console.log(response);
    } catch (error) {
        console.log(error.message);
    }
}

myPromiseResult(); */

/* async function getAllAnime() {
    try {
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log("error:", error);
    }
}

getAllAnime(); */

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(()=> console.log('DATA IS FETCHED!'))




