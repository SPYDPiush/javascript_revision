function say() {

    console.log("hello")
    return "hey"
}

console.log(say())

const user = {
    username : "hsis",
    price : 434
}

function userdefine(getuser){
    console.log(`user is ${getuser.username} and their price is ${getuser.price}`)
}

userdefine(user)

//  directly pass object in function

userdefine({
    username : "hsis",
    price : 434
})

//  function same work in array 

const array = [10,20,2,34,4,44,]

function arraywork(getarray){
    console.log(getarray[1])
}

arraywork(array)


// rest operator same as spread operator but their working in different place 


function items(...item){   // ... rest operator used to access all arguments at a same time.
    console.log(item)
}

items(20,102,1,22)




function add(){

    const num =10
    function add2(){

        const num = 20
        console.log(this.num)
    }

    add2()
}

add()