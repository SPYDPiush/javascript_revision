

// singleton object 
const obj1 = new Object()
console.log(typeof obj1)


// literals object 
const obj = {}
console.log(typeof obj)


const tinder = {
    id : 1,
    name : "xyz",
    isloggedIN :  true
}

console.log(tinder)
console.log(tinder.id)

const objj1 =  {1: "a", 2: 'b'}

const objj2 =  {1: "a", 2: 'b'}
const objj3 =  {1: "a", 2: 'b'}

const obj3 = Object.assign({}, objj1, objj2, objj3)

console.log(obj3)

const obj4 = {...objj1, ...objj2, ...objj3}

console.log(obj4);

console.log(Object.keys(tinder))
console.log(Object.values(tinder))

// rarely used 

console.log(Object.entries(tinder))

console.log(tinder.hasOwnProperty('isloggedIN'))


const course = {
    id : 1,
    name : 'hsi',
    sub : function ()  {
        console.log('hello i am a  function')
        return "printed"
    },
    courseInstructor: "hitesh"
}

const { id , name, courseInstructor: Instructor } = course
console.log(id)
console.log(Instructor)


console.log(course.sub())