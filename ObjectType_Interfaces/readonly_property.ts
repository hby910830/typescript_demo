interface Person {
    readonly id: number
    name: string
    age?: number
    [propName: string]: any
}


let Tom:Person = {
    id: 1234,
    name: 'Tom',
    age: 12,
    gender: 'female'
}
// Tom.id = 12  // error TS2540: Cannot assign to 'id' because it is a read-only property.   Tom.id = 12