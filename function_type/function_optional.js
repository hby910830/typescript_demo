{
    function buildName(firstName, lastName) {
        if (lastName) {
            return firstName + ' ' + lastName;
        }
        else {
            return firstName + ' han';
        }
    }
    var tomcat_1 = buildName('Tom', 'Cat'); //Tom Cat
    var tom_1 = buildName('Tom'); //Tom han
    console.log(tomcat_1, tom_1);
}
//需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了：
