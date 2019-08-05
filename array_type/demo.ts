//最简单的方法是使用「类型 + 方括号」来表示数组：
let fibonacci: number[] = [1, 2, 3, 4, 5]

let errFibonacci: number[] = [1,'2',3,{a:1}]
//Type 'string' is not assignable to type 'number'.

fibonacci.push('8')
//Argument of type '"8"' is not assignable to parameter of type 'number'.