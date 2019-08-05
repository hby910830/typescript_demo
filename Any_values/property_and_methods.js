// 在任意值上访问任何属性都是允许的：
var anyThing = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
//也允许调用任何方法：
var anyThing = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
/*
*  可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
 */ 
