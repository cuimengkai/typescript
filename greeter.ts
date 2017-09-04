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