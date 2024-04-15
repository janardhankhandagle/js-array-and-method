//An array is a special variable, which can hold more than one value:
 let arr =[1,2,3,4,5]
 console.log(arr)
 console.log(arr[3])
 console.log(arr.length)
 /*
 Syntax:

const array_name = [item1, item2, ...];  

 */

// Array method

// 1) tostring method
//The JavaScript method toString() converts an array to a string of (comma separated) array values.
const to=["jk", "purush", "sandy "," pande"]
const new1=to.toLocaleString()
console.log(new1)

//2)at method
const at1=["jk", "purush", "sandy "," pande"]
const at2=at1.at([1])
console.log(at2)

//join method
const joi=["jk", "purush", "sandy "," pande"]
const pk=joi.join("♡")
console.log(pk)

//pop() method
//The pop() method removes the last element from an array:
const remove=[  1,2,3,4,5]
const rem=remove.pop()
console.log(rem)
// push() method
//the push() method adds a new element to an array (at the end):
const add=[1,2,3,4,5]
const ad=add.push(6)
console.log(ad)

// shift() method
//The shift() method removes the first array element and "shifts" all other elements to a lower index.
const shif=["hello","world", "from","js"]
const  js=shif.shift()
console.log(js)
//unshift() method 
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
const hel=["hello","world", "from","js"]

console.log(hel.unshift("gm"))

// concat method 
const pande=["vaibhav pande" ," ♡"]
const item =["komal"]
const love=pande.concat(item)
console.log(love)

//slice() method
//The slice() method slices out a piece of an array into a new array:
const sli=["hello","world", "from","js"]
const slick=sli.slice(1)
console.log(slick)


//sort() method
const  sir=["hello","world", "from","js"]
console.log(sir.sort())

// reverse() method 
const rev=["hello","world", "from","js"]
console.log(rev.sort())
console.log(rev.reverse())

// array iteration 
//array map method
//The map() method creates a new array by performing a function on each array element.
const map1=[34,56,78,90]
const map2=map1.map((value,index,array)=>{
    console.log(value,index,array)
return value*2 
})
console.log(map2)

// filter method 
//The filter() method creates a new array with array elements that pass a test.
const filt=[34,5,6,89,76,4,9]
const filt2=filt.filter((a)=>{
    return a<6
})
console.log(filt2)


//reduce method 
//The reduce() method runs a function on each array element to produce (reduce it to) a single value.
const red=[34,5,65,32,23,14]
 const red2=red.reduce((h1,h2)=>{
    return h1+h2
})
console.log(red2)
