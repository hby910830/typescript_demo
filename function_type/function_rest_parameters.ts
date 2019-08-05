function push(arr, ...items){
    items.forEach(item =>{
        arr.push(item)
    })
}

let a = []
push(a,1,2,3,4)
console.log(a);