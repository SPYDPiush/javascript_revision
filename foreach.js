

const arr=[1,2,3,4]


function double(item){
    console.log(item*2)
}

// arr.forEach( (item) => {  // in forEach it manupulated using callback function  callback function mtlb function ka nam nhi hoga.

//     console.log(item)

// })

// arr.forEach( double); // isme hm seedhe function pass kr skte hai mtlb us function ka reference na ki function ko call krna hai
// function call jab hm ** double() ** karenge to hoga aur agar hm ** double ** krenge to sirf us function ka reference pass hoga.

//  forof function  mainly use in array 

// const arr1=[1,2,4,5,5]

// for (const i of arr1) {
//     console.log(i)
    
// }

const obj = {
    lan: 'js',
    level : 2,
    time : 4
};


// for (const i of obj) {  // we can not iterate the object using forof loop 

//     console.log(i)
    
// }


// forin loop  mainly use for object iteration but also work in array and it return the index value if use forin loop 

for (const key in obj) {
    console.log(key);
    
}