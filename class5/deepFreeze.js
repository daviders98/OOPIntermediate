function deepFreeze(arg){
    if(!(typeof arg==='object')){
        return
    }
    Object.freeze(arg)
    for(let key in arg){
        deepFreeze(arg[key])
    }
    return arg
}

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

const copy = deepFreeze(obj1)
console.log(copy)
copy.c.d = 'NEW LETTER'
console.log(copy)