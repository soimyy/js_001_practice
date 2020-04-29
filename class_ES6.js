class Humen {
    constructor() {
        this.sex = 'male';
    }

    printSex = () => console.log(this.sex);
}


class Person extends Humen{
    constructor() {
        super();
        this.name = 'soimyy';
        this.sex = 'famale';
    }

    printName() {
        console.log(this.name);
    }
}


person = new Person();
person.printName();
person.printSex();
