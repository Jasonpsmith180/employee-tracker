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
                    'Update an employee role'
                ]
            }
        ])
        .then(answer => {
            switch (answer.action) {
                case ('View all departments'):
                    console.log(answer.action);
                    break;
                case ('View all roles'):
                    console.log(answer.action);
                    break;
                case ('View all employees'):
                    console.log(answer.action);
                    break;
                case ('Add a department'):
                    console.log(answer.action);
                    break;
                case ('Add a role'):
                    console.log(answer.action);
                    break;
                case ('Add an employee'):
                    console.log(answer.action);
                    break;
                case ('Update an employee role'):
                    console.log(answer.action);
                    break;
            }
        })
    }


// Call start function
startPrompt();


