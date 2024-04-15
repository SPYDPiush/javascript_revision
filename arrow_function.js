const user = {
    username: 'hist',
    price: 234,
    welcome : function welcome(){
        // console.log(`${this.username} , welcome to this arrow function ${this.price}`)
        // console.log(this)
    }
    
}


// user.welcome()

// console.log(this)



// function chai() {
//     username =  'his'
//     // console.log(this.username)  this is not used in function 
// }


// chai()




// const addtwono = (num1,num2) => {
//     return num1+num2
// }

// console.log(addtwono(2,3))


// implicit return  it works in single line logic and no return keyword is used

// const addtwono = (num1,num2) => num1+num2

// console.log(addtwono(2,3))


// **********************   ==== *********************//

// in this arrow method if used small bracket instead of curly bracket no return keywords is used.

const addtwono = (num1,num2) => (
    num1+num2
)


console.log(addtwono(2,5));