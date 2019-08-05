function buildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}

let tomcat = buildName('Tom', 'Cat');   //Tom Cat
let tom = buildName('Tom');             //Tom Cat

console.log(tomcat, tom);