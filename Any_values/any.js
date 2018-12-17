// 如果是一个普通类型，在赋值过程中改变类型是不被允许的：
var myFavoriteNumber = 'ten';
// myFavoriteNumber = 10   index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
// 但如果是 any 类型，则允许被赋值为任意类型
var myFavoriteNumberAny = 'ten';
myFavoriteNumberAny = 10;
console.log(myFavoriteNumberAny);
