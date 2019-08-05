var isDone = false;
console.log(isDone);
var createdByNewBoolean = Boolean(1);
// 使用构造函数 Boolean 创造的对象不是布尔值：
var createdByNewBooleanObj = new Boolean(1);
console.log(createdByNewBoolean); //true
console.log(createdByNewBooleanObj); //[Boolean: true]
