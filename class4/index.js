const rose = {
    age:49,
    email: 'rose@gmail.com'
}
const sarah = rose

console.log({rose,sarah})
sarah.age = 20
sarah.email = 'sarah@gmail.com'
console.log(rose)

const obj1 = {
    a:'firstLetter',
    b:'secondLetter',
    letters: {
        d:'thirdLetter',
        e:'fourthLetter'
    }
}

const obj2 = {}
for(prop in obj1){
    //shallow copy
    obj2[prop] = obj1[prop]
}
console.log(obj2)
obj2.letters.d = '4thLetter'
console.log(obj1,obj2) // The reference is still there for nested objects

console.log('Shallow copy')
const obj3 = {...obj1}
console.log(obj3,obj1)
obj3.letters.d = 'Letter number 4'
console.log(obj1,obj3)

console.log('DEEP COPY')
const obj4 = structuredClone(obj3)
console.log(obj4,obj3)
obj4.letters.d = '4th letter in alphabet'
console.log(obj3)
console.log(obj4)


