interface seachFunc {
    (source: string, subString: string): boolean
}

let mySearch: seachFunc

mySearch = function (source: string, subString: string) {
    return source.search(subString) !== 1
}