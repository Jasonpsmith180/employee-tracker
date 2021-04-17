// dependencies
const db = require('./db/connection');
const inquirer = require('inquirer');

// start DB connection
db.connect(err => {
    if (err) throw err;
});

// Start User Prompts
function startPrompt() {
    console.log(
        `
        ==========================
             Employee Tracker
        ==========================
        `
    );
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Please choose an action.',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update and employee role'
                ]
            }
        ])
}

// Call start function
startPrompt();


