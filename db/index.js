// TODO: Included packages needed for this application

const inquirer = require('inquirer');
const fs = require ('fs');
const connection = require ("./config/connection");
const { listAllDepartments } = require("./lib/queries");
const { displayAllDepartments } = require("./lib/displays");

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
          displayallEmployees(rows);
          start();
        });
        break;

      case "Add a department":


        }

    default:
      start();
    }
  })
}



  {
    type: 'input',
    name: 'newDepartment',
    message: 'Enter new department name',
  },

  {
    type: 'input',
    name: 'newRole'
  }

  ]
],