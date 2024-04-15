//  IIFE 
// Immediately invoked function expression


// normal function 

// function chai() {
//     console.log('this is a chai')
// }

// chai();

// IIFE Function

// unnamed iife 

(
    () => {
        console.log('this is a chai')
    }
)();

// named iife

( function chai(){
    console.log('this  is a chai')
})();

// pass argument in iife

let a=10;

(
    (name) => console.log(`${name} take a chai in morning ${a}`)
)("aman")