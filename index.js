const inquirer = require("inquirer");
const mysql = require('mysql2');

promptQuestions = () => {
    return inquirer.prompt([
        {
        type: 'list',
        message: 'What can I help with?',
        name: 'name',
        choices: [ 'View all departments', 'View all roles, View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        },

])
}

promptQuestions()
.then((data));