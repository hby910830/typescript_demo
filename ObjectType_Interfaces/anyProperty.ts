interface Person {
    name: string
    age?: number
    [propName: string]: any
}

let tom: Person = {
    name: 'lua',
    age: 30,
    gender: 'male',
    skin: 'yellow'
}