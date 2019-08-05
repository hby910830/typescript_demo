function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + ' ' + lastName;
}
var tomcat = buildName('Tom', 'Cat'); //Tom Cat
var tom = buildName('Tom'); //Tom Cat
console.log(tomcat, tom);
