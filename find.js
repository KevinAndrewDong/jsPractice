var obj = {a : { b: { c: 1 } }}

function find(object,str){
    let strArr = str.split('.')
    for(let i=0;i<strArr.length;i++){
        if (object) {
            object = object[strArr[i]]
        }
    }
    console.log(object);
    return object
}



find(obj, 'a.b.c') // 1
find(obj, 'a.d.c') // undefined