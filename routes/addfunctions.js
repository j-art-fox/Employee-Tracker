const inquirer = require("inquirer");

function addDepartment() {
    console.log("addDepartment");
    let newDepData = inquirer
        .prompt([
            {
                type: 'input',
                message: 'Type the name of the new department.',
                name: 'departmentName',
            }
        ])
        .then((newDepData) => {
            console.log(newDepData.departmentName.trim())
        })

}

function addRole() {
    // review activities 8, crud insert 
    console.log("addRole");
}

function addEmployee() {
    console.log("addEmployee");
}


module.exports = {
    addDepartment,
    addRole,
    addEmployee
};