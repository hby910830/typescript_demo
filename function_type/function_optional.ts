{
    function buildName(firstName: string, lastName?: string) {
        if (lastName) {
            return firstName + ' ' + lastName;
        } else {
            return firstName + ' han';
        }
    }

    let tomcat = buildName('Tom', 'Cat');   //Tom Cat
    let tom = buildName('Tom');             //Tom han
    console.log(tomcat, tom);
}

//需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了：