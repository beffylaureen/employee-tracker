const inquirer = require("inquirer");
const connection = require("../db/connection");

function listAllDepartments(){
  return connection.promise().query("SELECT department.id, department.name FROM department;");
}
function listAllRoles(){
  return connection.promise().query("SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department ON role.department_id = department.id;");
}
function listAllEmployees(){
  return connection.promise().query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name AS department FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id;")
}
function createDepartment(department){
  return connection.promise().query("INSERT INTO department SET ?", department)
}
module.exports = {
  listAllDepartments,
  listAllRoles,
  listAllEmployees,
  createDepartment
}