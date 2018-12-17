
// TypeScript 中，使用 : 指定变量的类型，: 的前后有没有空格都可以
function sayHello(person: string) {
    return 'Hello, ' + person
}

let user = 'Tom'

console.log(sayHello(user))