require("console.table");
const addfunctions = require("./routes/addfunctions")
const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "&UJM6yhn354",
    database: "company_db"
});

db.connect((err) => {
    if (err) throw err;
});



//This is a promise using async + await instead of .then
async function runMainMenu() {
    const data = await inquirer
        .prompt([
            {
                type: 'list',
                message: 'Main Menu',
                name: "mainMenu",
                choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role", "exit"]
            }
        ])

    switch (data.mainMenu) {
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
            addfunctions.addDepartment();
            break;
        case 'add a role':
            addfunctions.addRole();
            break;
        case 'add an employee':
            addfunctions.addEmployee();
            break;
        case 'update an employee role':
            updateEmpRole();
            break;
        case 'exit':
            endInquirer();
        default:
            endInquirer();
    }
};

async function viewDepartments() {
    try {
        // .promise() returns back data in various formats as an index(as an array), and if you want to use the object format, then array item[0] is your go to. 
        const depData = await db.promise().query("select * from department");
        // console.log vs .table = .table comes back as a formatted table, like when you use select * from 'table'
        console.table(depData[0]);
        runMainMenu();
    } catch (err) {
        console.log(err)
    }

}

async function viewRoles() {
    try {
        const roleData = await db.promise().query("select * from role");
        console.table(roleData[0]);
        runMainMenu();
    } catch (err) {
        console.log(err)
    }
}

async function viewEmployees() {
    try {
        const employeeData = await db.promise().query("select * from employee");
        console.table(employeeData[0]);
        runMainMenu();
    } catch (err) {
        console.log(err)
    }
    
}

function updateEmpRole() {
    console.log("updateEmpRole")
}
function endInquirer() {
    return;
}

function init() {
    runMainMenu();
};

init()