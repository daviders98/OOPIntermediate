const person = {
    name:'Nadia',
    age:20,
    coursesTaken:[
        'OOP',
        'JS'
    ],
    addCourseTaken(course){
        this.coursesTaken.push(course)
    }
}

console.log(person.coursesTaken)
person.addCourseTaken('Design')
console.log(person.coursesTaken)

function Student({name,age,coursesTaken}){
    this.name = name;
    this.age = age;
    this.coursesTaken = coursesTaken
    this.addCourseTaken = (newCourse)=>{
        this.coursesTaken.push(newCourse)
    }
}

Student.prototype.addCourseTaken = function (newCourse){
    this.coursesTaken.push(newCourse)
}

const Mike = new Student({
    name: 'Mike Stewart',
    age:17,
    coursesTaken:['Game Dev','JS']
})

console.log(Mike.hasOwnProperty('name'),'askdasjdkjsdkjaskd')

class StudentClass{
    constructor(name,age,coursesTaken){
        this.name = name
        this.age = age
        this.coursesTaken = coursesTaken
    }

    addCourseTaken(newCourse){
        this.addCourseTaken.push(newCourse)
    }
}

const sam = new StudentClass(
    'Sam Smith',
    20,
    ['JS','Python']
)
console.log(sam)


class Course{
    constructor({name,classes=[]}){
        this._name = name
        this.classes = classes
    }
    get name(){
        return this._name
    }
    set name(newName){
        if(newName){
            this._name = newName
        }
    }
}