// TODO: Included packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const connection = require("./db/connection");
require ("console.table") 
const { listAllDepartments,
  listAllRoles, listAllEmployees, createDepartment, createRole, createEmployee
  } = require("./db/queries");
const { displayAllDepartments } = require("./db/displays");

// TODO: Create an array of questions within a function for user input

function start() {
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
  ]).then(response => {
    switch (response.option) {
      case "View all departments":
        listAllDepartments().then(([rows]) => {
          //displayAllDepartments(rows);
          console.log("\n");
          console.table(rows)
          start();
        });     
        break;

      case "View all roles":
        listAllRoles().then(([rows]) => {
          // displayAllRoles(rows);
          console.log("\n");
          console.table (rows)
          start();
        });
        //break;

      case "View all employees":
        listAllEmployees().then(([rows]) => {
          //displayAllEmployees(rows);
          console.log("\n");
          console.table (rows)
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

    function addDepartment() {
      inquirer.prompt([
        {
          name: "departmentName",
          type: "input",
          message: "Enter new department name"
        },
      ]).then((answer) => {
        createDepartment(answer.departmentName);
        console.log(`Added Department ${answer.departmentName}`);
        start();
      })
    }

    function addRole() {
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
      ]).then((answer) => {
        createRole(answer.title);
        console.log(`Added Role ${answer.title}`);
        start();
      },
  
    function addEmployee() {
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

      ]).then((answer) => {
        createEmployee(answer.employee);
        console.log(`Added Employee ${answer.employee}`);
        start();
    },

    function updateEmployeeRole() {

    },

    function viewEmpByManager() {

    },

    function viewEmpByDept() {

    },

    function deleteDept() {

    },

    function deleteRole() {

    },

    function deleteEmp() {

    },

    function viewDeptBudget() {

    },
   
  



  )
  start();
})}})}