var isDone = false;
console.log(isDone);
// 使用构造函数 Boolean 创造的对象不是布尔值：
var createdByNewBoolean = Boolean(1);
var createdByNewBooleanObj = new Boolean(1);
console.log(createdByNewBoolean);
console.log(createdByNewBooleanObj);
