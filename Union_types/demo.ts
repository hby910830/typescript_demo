// 联合类型（Union Types）表示取值可以为多种类型中的一种。

let myFavoriteNumber: string | number
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;


// let myFavoriteNumber: string | number;
// myFavoriteNumber = true;

// index.ts(2,1): error TS2322: Type 'boolean' is not assignable to type 'string | number'.
//   Type 'boolean' is not assignable to type 'number'.