// complete this js code
function Person(name, age) {
	this.name=name
	this.age=age
}
Person.prototype.greet={
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
}

function Employee(name, age, jobTitle) {
	Person(name,age).call(this)
	this.jobTitle=jobTitle
}
Employee.prototype.__proto__=Person.prototype
Employee.prototype.jobGreet={
	console.log(`Hello, my name is ${this.age}, I am ${this.jobTitle} years old.`)
}
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
