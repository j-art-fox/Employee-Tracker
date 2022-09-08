const inquirer = require("inquirer");
const server = require("../server")

function addRole() {
    // review activities 8, crud insert 
    console.log("addRole");
}



const depQues = [
    {
        type: 'input',
        message: 'Type the name of the new department.',
        name: 'departmentName'
    }
]


module.exports = {
    addRole,
    depQues
};