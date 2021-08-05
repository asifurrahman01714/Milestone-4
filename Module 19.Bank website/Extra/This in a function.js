/* 
The JavaScript this keyword refers to the object it belongs to.

It has different values depending on where it is used:

In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.
*/

function Student(name, age, cgpa, language) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.language = language;
}
let firstStudent = new Student("Asif", 23, 3.7, "Javascript");
console.log(firstStudent);

