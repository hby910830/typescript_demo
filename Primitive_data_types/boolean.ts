let isDone: boolean = false
console.log(isDone);


let createdByNewBoolean: boolean = Boolean(1)
// 使用构造函数 Boolean 创造的对象不是布尔值：
let createdByNewBooleanObj: Boolean = new Boolean(1)
console.log(createdByNewBoolean);  //true
console.log(createdByNewBooleanObj); //[Boolean: true]