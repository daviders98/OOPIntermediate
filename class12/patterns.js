function validateParam(requiredParam){
    throw new Error(`The param ${requiredParam} is required.`)
}
function createStudent({
    name = validateParam('name'),
    age,
    email= validateParam('email'),
    twitter,
    instagram,
    facebook,
    coursesTaken = []
}={}){
    const privateObj= {
        '_name':name
    }

    const publicObj = {
        changeName(newName){
            if(newName){
                privateObj._name=newName
            }
        },
        readName(){
            return privateObj._name
        },
        age,
        email,
        socialMedia:{
            twitter,
            instagram,
            facebook
        },
        coursesTaken
    }
    Object.defineProperty(publicObj,'readName',{
        configurable:false,
        writable:false
    })
    Object.defineProperty(publicObj,'changeName',{
        configurable:false,
        writable:false
    })
    return publicObj
}

const steve = createStudent({
    name:'Steve',
    age:18,
    email:'steve@gmail.com',
})
console.log(steve)
console.log(steve.readName())

function createStudentV2({
    name = validateParam('name'),
    age,
    email= validateParam('email'),
    twitter,
    instagram,
    facebook,
    coursesTaken = []
}={}){
    const privateObj= {
        '_name':name
    }

    const publicObj = {
        get name(){
            return privateObj._name
        },
        set name(newName){
            if(newName){
                privateObj._name = newName
            }else{
                console.warn('A name is required')
            }
        },
        age,
        email,
        socialMedia:{
            twitter,
            instagram,
            facebook
        },
        coursesTaken
    }
    Object.defineProperty(publicObj,'readName',{
        configurable:false,
        writable:false
    })
    Object.defineProperty(publicObj,'changeName',{
        configurable:false,
        writable:false
    })
    return publicObj
}

const Louis = createStudentV2({
    name:'Louis',
    age:19,
    email:'Louis@gmail.com'
})
Louis.name = ''
Louis.name = 'Terrance'
console.log(Louis)

function createCourse({
    name= requiredParam('name'),
    classes = []
}){
    const private = {
        "_name":name,
        "_classes":classes
    }

    const public = {
        get name(){
            return private._name
        },
        get classes(){
            return private._classes
        },
        set classes(newClass){
            if(!('name' in newClass)){
                console.warn("Your course doesnt have name")
                return
            }
            if(!Array.isArray(newClass.content)){
                console.warn('Your Course is not an array')
                return
            }

            private._classes.push(newClass)
        }
    }
    return public
}

