//声明一个接口
interface searchFunc {
  //下面这个是定义了这个接口的参数为两个 string 类型，返回值为 boolean 类型
  (source: string, subString: string): boolean
}

//声明一个引用 上面 接口类型的变量
let mySearch: searchFunc

//这里的参数可以写成与接口中的参数不一样的名字，这里的参数是针对的类型检查而不是值检查
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== 1 //search 是 js 中查询字符串的方法 如果没有的话返回的是 -1
}

console.log(mySearch('hby', 'h'));