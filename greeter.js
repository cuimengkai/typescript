function greeter1(persion) {
    return "Hello , " + persion;
}
var users = "Trek";
document.body.innerHTML = greeter1(users);
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Trek", lastName: "Cui" };
document.body.innerHTML = greeter(user);
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter2(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var student = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter2(student);
