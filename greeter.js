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
