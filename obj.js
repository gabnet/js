var john = {
	first : "John",
	last : "Smith"
};

console.log("Name: " + john.first + " " + john.last);
console.log("Name: " + john["first"] + " " + john["last"]);

function Person() {}

function Person(first, last){
	this.first = first,
	this.last = last
}

Person.prototype.GetFirst = function(){
	return this.first;
};

Person.prototype.GetLast = function(){
	return this.last;
};

Person.prototype.SetFirst = function(first){
	this.first = first;
}

var jim = new Person("jim", "morrison");

console.log("jim: " + jim.GetFirst() + " " + jim.GetLast());

function Student() {};

function Student(first, last){
	this.first = first,
	this.last = last
};

Student.prototype = Object.create(Person.prototype);

var simo = new Student("simone", "tretola");

console.log("simone: " + simo.GetFirst() + " " + simo.GetLast());