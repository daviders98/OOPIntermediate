class Duck{
    static sound = 'Quak!'
    static makeSound (){
        return this.sound
    }
}

console.log(Duck.sound)
console.log(Duck.makeSound())

const data = {
    name:'John',
    email:'John@gmail.com',
    age:19,
    coursesTaken: ['OOP'],
    addCourse(newCourse){
        this.coursesTaken.push(newCourse)
    }
}

console.log(Object.keys(data)) //returns strings
console.log(Object.getOwnPropertyNames(data))//returns strings
console.log(Object.entries(data))//returns strings names and values
console.log(Object.getOwnPropertyDescriptors(data)) //returns property properties.

data.addCourse('JS')
// console.log(Object.entries(data)[4][1]('HTML'))
//previous line fails because the context "this" is now the array
Object.defineProperty(data,"numberOfPets",{
    value:10,
    enumerable: false,
    writable:false,
    configurable:false
})

Object.defineProperty(data,'browser',{
    value:'Chrome',
    enumerable:false,
    writable:true,
    configurable:true,
})

Object.defineProperty(data,'favCodeEditor',{
    value:'VS Code',
    enumerable:true,
    writable:false,
    configurable:true,
})

Object.defineProperty(data,'favColor',{
    value:'Yellow',
    enumerable:true,
    writable:true,
    configurable:false,
})
//ENUMERABLE
console.log(Object.keys(data)) //browser doesnt appear in array nor numberOfPets
console.log(Object.getOwnPropertyNames(data)) //Every key appears in array
console.log('browser' in data) // works as getOwnpropetyNames
data.favCodeEditor = 'Atom'

//WRITABLE
console.log(data) // THE VALUE DOESNT CHANGE
delete data.favCodeEditor
console.log(data) // Can be deleted but not edited

//CONFIGURABLE
delete data.favColor
console.log(data) // CANNOT BE DELETED

//SEAL
Object.seal(data)
delete data.name
console.log(data) //CANNOT BE DELETED

//FREEZE
Object.freeze(data)
data.name='Paul'
console.log(data) // CANNOT BE EDITED
delete data.name
console.log(data) // CANNOT BE DELETED EITHER