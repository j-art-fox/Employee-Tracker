import inquirer from 'inquirer';
// const fs = require('fs');


function runMainMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Main Menu',
                name: "mainMenu",
                choices: ["view all departments", "view all roles", " view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
            }
        ])

        .then((data) => {
            switch (data) {
                case 'view all departments':
                    viewDepartments();
                    break;
                case 'view all roles':
                    viewRoles();
                    break;
                case 'view all employees':
                    viewEmployees();
                    break;
                case 'add a department':
                    addDepartment();
                    break;
                case 'add a role':
                    addRole();
                    break;
                case 'add an employee':
                    addEmployee();
                    break;
                case 'update an employee role':
                    updateEmpRole();
                    break;

            }
        });
}

function viewDepartments() {
    console.log("Department Names and Department IDs");
}

function viewRoles() {
    console.log("viewRoles");
}

function viewEmployees() {
    console.log("viewEmployees");
}

function addDepartment() {
    console.log("addDepartment");
}

function addRole() {
    console.log("addRole");
}

function addEmployee() {
    console.log("addEmployee");
}

function updateEmpRole(){
    console.log("updateEmpRole")
}

function init() {
    runMainMenu();
};

init()