

function Course({
    name= requiredParam('name'),
    classes = []
}){
    this.name = name
    this.classes = classes
}

function Student({
    name = validateParam('name'),
    age,
    email= validateParam('email'),
    twitter,
    instagram,
    facebook,
    coursesTaken = []
}={}){
    this.name = name
    this.email = email
    this.age = age
    this.socialMedia = {
        twitter,
        facebook,
        instagram
    }

    const private = {
        '_coursesTaken':[]
    }
    Object.defineProperty(this,'coursesTaken',{
        get(){
            return private._coursesTaken
        },
        set (newCourse){
            console.log('aaaaa',newCourse)
            if(newCourse instanceof Course){
                private._coursesTaken.push(newCourse)
            }else{
                console.warn('One of the Courses is not real')
            }
        },
        configurable:false
    })
    for(courseIndex in coursesTaken){
        this.coursesTaken = coursesTaken[courseIndex]
    }
}

const mathCourse = new Course({
    name:'Math',
    classes:['Intro to math','Order of operations']
})

const fakeCourse = {
    name:'Geography',
    classes:['Intro to geography','Continents']
}
const felix = new Student({
    name:'Felix',
    email:'Felix@gmail.com',
    coursesTaken:[mathCourse,fakeCourse]
})
console.log(felix.coursesTaken)
