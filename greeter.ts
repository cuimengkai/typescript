function greeter1(persion: string){
	return "Hello , "+persion;
}
var users = "Trek";
document.body.innerHTML = greeter1(users);

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Trek", lastName: "Cui" };

document.body.innerHTML = greeter(user);


class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter2(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var student = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter2(student);