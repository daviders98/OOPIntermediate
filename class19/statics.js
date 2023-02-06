class SuperObject{
    static isObject(subject){
        return typeof subject === 'object' && !Array.isArray(subject)
    }
    static deepCopy(subject){
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
}

function CustomObject(){

}
CustomObject.deepCopy = function(subject){
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
CustomObject.isObject = function(subject){
    return typeof subject === 'object' && !Array.isArray(subject)
}

console.log(CustomObject)
console.log(CustomObject.isObject({'a':'b'}))
console.log(CustomObject.isObject(['a']))
const obj = {
    'a':'c',
    'e':'f'
}
console.log(Object.keys(obj))
console.log(Object.entries(obj))