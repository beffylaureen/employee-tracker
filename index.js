// TODO: Included packages needed for this application

const inquirer = require('inquirer');
const fs = require ('fs');
const connection = require ("./db/connection");
const { listAllDepartments } = require("./db/queries");
const { displayAllDepartments } = require("./db/displays");

// TODO: Create an array of questions within a function for user input

function start(){
  inquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: 'What would you like to do?',
      choices: [
      'View all departments', 
      'View all roles', 
      'View all employees', 
      'Add a department', 
      'Add a role', 
      'Add an employee', 
      'Update an employee role', 
      'Update an employee manager', 
      'View employees by manager', 
      'View employees by department',
      'Delete department',
      'Delete role',
      'Delete employee',
      'View a department budget',
      ]
    }
  ]).then( response => {
    switch(response.option){
      case "View all departments":
        viewAllDepartments().then( ([rows]) => {
          displayAllDepartments(rows);
          start();
        });
        break;

      case "View all roles":
        viewAllRoles().then( ([rows]) => {
          displayAllRoles(rows);
          start();
        });
        break;

      case "View all employees":
        viewAllEmployees().then( ([rows]) => {
          displayAllEmployees(rows);
          start();
        });
        break;

      case "Add a department":
        addDepartment();
        break;
      
      case "Add a role":
        addRole();
        break;

      case "Add an employee":
        addEmployee();
        break;

      case "Update an employee role":
        updateEmployeeRole();
        break;

      case "View employees by manager":
        viewEmpByManager();
        break;

      case "View employees by department":
        viewEmpByDept();
        break;

      case "Delete department":
        deleteDept();
        break;

      case "Delete role":
        deleteRole();
        break;

      case "Delete employee":
        deleteEmp();
        break;

      case "View a department budget":
        viewDeptBudget();
        break;
        }

  function addDepartment(){
    inquirer.prompt([
      {
        name: "departmentName",
        type: "input",
        message: "Enter new department name"
      },
    ])
  }

  function addRole(){
    inquirer.prompt([
      {
        name: "roleTitle",
        type: "input",
        message: "Enter title of new role"
      },
      {
        name: "salary",
        type: "input",
        message: "Enter salary"
      },
      {
        name: "department",
        typs: "input",
        message: "Enter department name"
      },     
    ])
  }

  function addEmployee(){
    inquirer.prompt([
      {
        name: "firstName",
        type: "input",
        message: "Enter employee's first name "
      },
      {
        name: "lastName",
        type: "input",
        message: "Enter employee's last name "
      },
      {
        name: "role",
        type: "input",
        message: "Enter the employee's role "
      },
      { 
        name: "manager",
        type: "input",
        message: "Enter the employee's manager "
      },

    ])
  }

  function updateEmployeeRole(){

  }

  function viewEmpByManager(){

  }

  function viewEmpByDept(){

  }

  function deleteDept(){

  }

  function deleteRole(){

  }

  function deleteEmp(){

  }

  function viewDeptBudget(){
    
  }
      start();
    }
  


  )}
