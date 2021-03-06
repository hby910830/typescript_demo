// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法

// function getLength(something: string | number): number {
//     return something.length
// }


// 上例中，length 不是 string 和 number 的共有属性，所以会报错。

// 访问 string 和 number 的共有属性是没问题的：

function getString(something: string | number): string {
    console.log(something.toString())
    return something.toString()
}

getString(123)