const inquirer = require("inquirer");
const connection = require("../db/connection");

function listAllDepartments(){
  return connection.promise().query("SELECT department.id, department.name AS department FROM department;");
}
function listAllRoles(){
  return connection.promise().query("SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department ON role.department_id = department.id;");
}
function listAllEmployees(){
  return connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id;")
}

function createDepartment(department){
  return connection.promise().query("INSERT INTO department SET ?", department);
}

function createRole(role){
  return connection.promise().query("INSERT INTO role SET ?", title, salary, department);
}

function createEmployee(employee){
  return connection.promose().query("INSERT INTO employee SET ?", first_name, last_name, role, manager);
}
module.exports = {
  listAllDepartments,
  listAllRoles,
  listAllEmployees,
  createDepartment,
  createRole,
  createEmployee
}