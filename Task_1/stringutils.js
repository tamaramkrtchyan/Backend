//task 1
const first=(str)=>{
    return str.split('').reverse().join('')
}
const second=(str)=>{
    return str.charAt(0).toUpperCase()+str.slice(1)
}
const third=(str,length)=>{
     if(typeof str!='string' || typeof length!='number'){
        throw new Error('it is not string')
     }
     if(str.length>length){
        return str.slice(0,length)+'...'
     }
     return str
}
module.exports= {first,second,third}
