// TODO: Included packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const connection = require("./db/connection");
require("console.table")
const { listAllDepartments,
  listAllRoles, listAllEmployees, createDepartment, createRole, createEmployee
} = require("./db/queries");
const { displayAllDepartments } = require("./db/displays");
//const employees = data.map(({ id, first_name, last_name}) => ({ name: first_name + " " + last_name, value: id}));

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
        // 'Update an employee manager',
        // 'View employees by manager',
        // 'View employees by department',
        // 'Delete department',
        // 'Delete role',
        // 'Delete employee',
        // 'View a department budget',
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
          console.table(rows)
          start();
        });
        break;

      case "View all employees":
        listAllEmployees().then(([rows]) => {
          //displayAllEmployees(rows);
          console.log("\n");
          console.table(rows)
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


     }

  })

}

function addDepartment() {
  inquirer.prompt([
    {
      name: "departmentName",
      type: "input",
      message: "Enter new department name"
    },
  ]).then((answer) => {
    let dept = {
      name: answer.departmentName
    }
    createDepartment(dept);
    console.log(`Added Department ${answer.departmentName}`);
    start();
  })
}

function addRole() {

  listAllDepartments().then(([depts]) => {

    const deptOptions = depts.map(({ id, department }) => ({
      name: department,
      value: id
    }))

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
        type: "list",
        message: "Enter department name",
        choices: deptOptions
      },
    ]).then((answer) => {
      let newRole = {
        "title" : answer.roleTitle, 
        "salary" : answer.salary,
        "department_id" : answer.department
      }
      createRole(newRole);
      console.log(`Added Role ${answer.newRole}`);
      start();
    })

  })

}


function addEmployee() {

  listAllRoles().then(([roles]) => {

    const roleOptions = roles.map(({ id, title }) => ({
      name: title,
      value: id
    }))

    listAllEmployees().then(([employee]) => {

      const managerOptions = employee.map(({ id, first_name, last_name, }) => ({
        name: `${first_name} ${last_name}`,
        value: id
      }))




    inquirer.prompt([
      {
        name: "first_name",
        type: "input",
        message: "Enter employee's first name "
      },
      {
        name: "last_name",
        type: "input",
        message: "Enter employee's last name "
      },
      {
        name: "role",
        type: "list",
        message: "Enter the employee's role ",
        choices: roleOptions
      },
      {
        name: "manager",
        type: "list",
        message: "Enter the employee's manager ",
        choices: managerOptions
      },

    ]).then((answer) => {

      let newEmployee = {
        "first_name": answer.first_name,
        "last_name": answer.last_name,
        "role_id": answer.role,
        "manager_id": answer.manager

      }

      createEmployee(newEmployee);
  
      console.log(`Added Employee ${newEmployee}`);
      start();
    })

  })

})
}

function updateEmployeeRole() {
  inquirer.prompt()[
    {
      name: "name",
      type: "list",
      message: "Which employee would you like to update?",
      choices: employees

    }
  ]

}





start();