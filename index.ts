class Person {
  name: string;
  age: number;
  #gender: string; // private field
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.#gender = gender;
  }
  get getGender(){
    return this.#gender;
  }

}
const people: Person[] = [];
const names = ['John', 'Jane', 'Bob', 'Alice', 'Joe', 'Mary', 'Tom', 'Sue', 'Bill', 'Sarah'];
const gender = ['male', 'female']
for (let i = 0; i < 10; i++) {
  people[i] = new Person(names[i], Math.floor(Math.random() * 100), gender[i % 2]);
}
console.log(people);
const array2table = (element:HTMLElement) => {
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
}
array2table(document.getElementById('root')!);

const helloWorld = (name: string):string => {
  return `Hello from ${name}`;
};

// document.getElementById("root")!.innerHTML = helloWorld("TypeScript") ?? "Something went wrong";
