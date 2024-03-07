// design a class for employee which takes is and name in during construction
// of object and has a salary property
export default class Employee {
  constructor(id, name) {
    if (!id || !name) {
      throw new Error('employee id and name are mandatory');
    }
    this.id = id;
    this.name = name;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  getiId() {
    return this.id;
  }

  getName() {
    return this.name;
  }
}

const employee = new Employee(1, 'jade');
console.log(employee);
// Employee { id: 1, name: 'jade' }
employee.setSalary(60);
console.log(employee.getSalary());
// 60



// if wanted this using prototypes:

// var Employee = function (id, name) {
//   this.id = id;
//   this.name = name;
// }

// Employee.prototype.setSalary = function (salary) {
//   this.salaray = salary;
// }