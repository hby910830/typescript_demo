// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：

function alertName(): void {
    console.log('My name is Tom')
}

console.log(alertName());