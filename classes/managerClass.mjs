// design a class for manager which is employee and can have 
// department property

import Employee from './classes.mjs';

class Manager extends Employee {
  setDepartment(name) {
    this.department = name
  }

  getDepartment() {
    return this.department;
  }

}

const manager = new Manager(1, 'jon')
console.log(manager);
manager.setDepartment('science');
// Manager { id: 1, name: 'jon' }
console.log(manager.getDepartment)
// [Function: getDepartment]

// if needed to write the prototype:
// var Manager = function (params) {
//   Employee.apply(this, arguments);
// };

//to clone employee prototype
// Manager.prototype = Object.create(Employee.prototype);
// Manager.prototype.constructor = Manager;

//Manager.prototype = setDepartment = function(name) {
//   this.department = name;
// }