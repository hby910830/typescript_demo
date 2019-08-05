{
    let sum = function (x: number, y: number): number {
        return x + y
    }

    sum(1, 2)
}

//这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。
// 如果需要我们手动给 mySum 添加类型，则应该是这样：

{
    let sum: (x: number, y: number, z: number) => number = function (x: number, y: number, z: number): number {
        return x + y + z
    }
    sum(1, 2, 3)
}

//在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。