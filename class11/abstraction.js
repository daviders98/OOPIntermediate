const studentBase = {
    name: undefined,
    email: undefined,
    age:undefined,
    coursesTaken: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined
    }
}

const tyler = deepCopy(studentBase)
Object.defineProperty(tyler,'name',{
    value:'Tyler',
    configurable:false
})
delete tyler.name //cannot be deleted
console.log(tyler)
console.log(Object.seal(tyler)) //properties cannot be deleted
console.log(Object.isSealed(tyler)) //boolean
console.log(Object.isFrozen(tyler))


function isObject(maybeObject){
    return typeof maybeObject =='object'
}
function isArray(maybeArray){
    return Array.isArray(maybeArray)
}
function deepCopy(subject){
    let copySubject;

    const subjectIsArray = isArray(subject)
    const subjectIsObject = isObject(subject)
    if(subjectIsArray){
        copySubject = []
    }else if(subjectIsObject){
        copySubject = {}
    }else{
        return subject
    }
    for(key in subject){
        const keyIsObject = isObject(subject[key])
        if(keyIsObject){
            copySubject[key] = deepCopy(subject[key])
        }else{
            if(subjectIsArray){
                copySubject.push(subject[key])
            }else{
                copySubject[key] = subject[key]
            }
        }
    }
    return copySubject
}