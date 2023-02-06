//Recursivity
function recursive(array){
    if(array.length){
        const firstElement = array[0]
        console.log(firstElement)
        array.shift()
        return recursive(array)
    }else{
        console.log('This is now an array >:(')
    }
}

let numbers = [0,2,7,4,2,6,8,5,29]
recursive(numbers)

//DEEP COPY WITH RECURSIVITY
const obj1 = {
    a:'a',
    b:'b',
    c:{
        d:'d',
        e:'e'
    },
    editA(){
        this.a = AAAAA
    }
}
console.log('AAAAAAA',Object.entries(obj1))
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
const obj2 = deepCopy(obj1)
console.log('COPY',obj2)