function Person(name, age) {
	this.name=name
	this.age=age
}
Person.prototype.greet=function(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
}

function Employee(name, age, jobTitle) {
	Person.call(this,name,age)
	this.jobTitle=jobTitle
}
Employee.prototype.__proto__=Person.prototype
Employee.prototype.jobGreet=function(){
	console.log(`Hello, my name is ${this.age}, I am ${this.jobTitle} years old.`)
}
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
