"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Person_gender;
class Person {
    constructor(name, age, gender) {
        _Person_gender.set(this, void 0);
        this.name = name;
        this.age = age;
        __classPrivateFieldSet(this, _Person_gender, gender, "f");
    }
    get getGender() {
        return __classPrivateFieldGet(this, _Person_gender, "f");
    }
}
_Person_gender = new WeakMap();
const people = [];
const names = ['John', 'Jane', 'Bob', 'Alice', 'Joe', 'Mary', 'Tom', 'Sue', 'Bill', 'Sarah'];
const gender = ['male', 'female'];
for (let i = 0; i < 10; i++) {
    people[i] = new Person(names[i], Math.floor(Math.random() * 100), gender[i % 2]);
}
console.log(people);
const array2table = (element) => {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const tr = document.createElement('tr');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    const th3 = document.createElement('th');
    th1.innerHTML = 'Name';
    th2.innerHTML = 'Age';
    th3.innerHTML = 'Gender';
    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(tr);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    for (let i = 0; i < people.length; i++) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        td1.innerHTML = people[i].name;
        td2.innerHTML = people[i].age.toString();
        td3.innerHTML = people[i].getGender;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
    }
    element.appendChild(table);
};
array2table(document.getElementById('root'));
const helloWorld = (name) => {
    return `Hello from ${name}`;
};
// document.getElementById("root")!.innerHTML = helloWorld("TypeScript") ?? "Something went wrong";
