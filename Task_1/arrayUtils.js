//task 3
function unique(arr) {
    return [...new Set(arr)];
}
function flatten(arr){
    return arr.flat(Infinity)
}
function chunk(arr,size){
    const result=[]
    for(let i=0;i<arr.length;i+=size){
        result.push(arr.slice(i,i+size))
    }
    return arr
}
module.exports = { unique,flatten,chunk };

