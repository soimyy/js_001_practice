class Humen {
    sex = 'male';

    printSex() {
        console.log(this.sex);
    }
}


class Person extends Humen{
    name = 'soimyy';
    sex = 'famale';

    printName = () => console.log(this.name);
}


person = new Person();
person.printName();
person.printSex();

