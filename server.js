require("console.table");
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
        case 'exit':
            process.exit();
    }
};

function addEmployee() {
    console.log("Add new employee");
    db.query("SELECT * FROM role", (err, results) => {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: "Please input the employee's first name.",
                    name: 'firstName'
                },
                {
                    type: 'input',
                    message: "Please input the employee's last name.",
                    name: 'lastName'
                },
                {
                    type: 'list',
                    message: "Select the id-number for their role.",
                    name: 'role',
                    choices: () => {
                        let roles = [];
                        for (const role of results) {
                            roles.push(role.id)
                        }
                        return roles;
                    }
                },
                {
                    type: 'list',
                    message: "Select the id-number for their manager.",
                    name: 'manager',
                    choices: ["1", "2", "3", "4"]
                }

            ]).then((response) => {
                const fn = response.firstName.trim();
                const ln = response.lastName.trim();
                db.query("INSERT INTO employee SET ?",
                    {
                        first_name: fn,
                        last_name: ln,
                        role_id: response.role,
                        manager_id: response.manager
                    });
                console.log(`${fn} ${ln} has been successfully saved.`);
                runMainMenu();
            });
    });
}

async function addDepartment() {
    console.log("Add a new department");
    const newDepData = await inquirer
        .prompt(depQues)
    const departmentName = newDepData.departmentName.trim();
    await db.promise().query('INSERT INTO department VALUES (DEFAULT, ?)', [departmentName]
    );
    console.log(`${departmentName} has been saved.`)
    runMainMenu();
}

function addRole() {
    console.log("Add a new role");
    db.query("SELECT * FROM department", (err, results) => {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Please input the name of the new role.",
                    name: "title"
                },
                {
                    type: "input",
                    message: "Please input the gross annual salary for this role.",
                    name: "salary"
                },
                {
                    type: "list",
                    message: "Please select the department id to associate with this role.",
                    choices: () => {
                        let departments = [];
                        for (const department of results) {
                            departments.push(department.id)
                        }
                        return departments;
                    },
                    name: 'department_id'
                }
            ]).then((response) => {
                db.query("INSERT INTO role SET ?",
                    {
                        title: response.title,
                        salary: response.salary,
                        department_id: response.department_id
                    })
                console.log(`${response.title} has been successfully saved.`);
                runMainMenu();
            })
    })
}

//TODO
function updateEmpRole() {
    console.log("updateEmpRole")
}

async function viewEmployees() {
    try {
        const employeeData = await db.promise().query("select * from employee");
        console.table(employeeData[0]);
    } catch (err) {
        console.log(err)
    }
    runMainMenu();

}

const depQues = [
    {
        type: 'input',
        message: 'Type the name of the new department.',
        name: 'departmentName'
    }
]

async function viewRoles() {
    try {
        const roleData = await db.promise().query("select * from role");
        console.table(roleData[0]);
    } catch (err) {
        console.log(err)
    }
    runMainMenu();
}

async function viewDepartments() {
    try {
        // .promise() returns back data in various formats as an index(as an array), and if you want to use the object format, then array item[0] is your go to. 
        const depData = await db.promise().query("select * from department");
        // console.log vs .table = .table comes back as a formatted table, like when you use select * from 'table'
        console.table(depData[0]);
    } catch (err) {
        console.log(err)
    }
    runMainMenu();
}

function init() {
    runMainMenu();
};

init()