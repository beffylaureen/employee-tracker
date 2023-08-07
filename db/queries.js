const inquirer = require("inquirer");
const connection = require("../db/connection");

function listAllDepartments(){
  return connection.promise().query("SELECT department.it, department.name FROM department;");
}

module.exports = {
  listAllDepartments
}