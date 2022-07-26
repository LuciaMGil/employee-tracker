const inquirer = require("inquirer");
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database`)
  );


connection.query('SELECT * FROM department', function (err, results){
    err ? console.log(err) : console.log(results);
})

promptQuestions = () => {
    return inquirer.prompt([
        {
        type: 'list',
        message: 'What can I help with?',
        name: 'name',
        choices: [ 'View all departments', 'View all roles, View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ])
}


const addRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the role?',
            name: 'roles'
        },
        {
            type: 'input',
            message: 'What is the salary of the role?',
            name: 'salary'
        },
        {
            type: 'input',
            message: 'What department does the role belong to?',
            name: 'salary'
        },
    ])
    .then((data) => {
    // Create roll with sql
    console.log(`Added ___`)
    });
};


const addDepartment = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'department'
        }
    ])
    .then((data) => {
    // Create department with sql
    })
};


const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the first name of the employee?',
            name: 'firstName'
        },
        {
            type: 'input',
            message: 'What is the last name of the employee?',
            name: 'lastName',
        },
        {
            type: 'input',
            message: 'What is the role of the employee?',
            name: 'role',
        },
        {
            type: 'input',
            message: 'Who is the manager of the employee?',
            name: 'manager',
        },
    ])
    .then((data) => {
    // Create employee with sql
    })
};

const updateEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the first name of the employee?',
            name: 'firstName'
        },
        {
            type: 'input',
            message: 'What is the last name of the employee?',
            name: 'lastName',
        },
        {
            type: 'list',
            message: 'What is the employees role?',
            name: 'role',
            choices: ['Sales Lead', "Sales", "Finance", "Legal"]
        },
        {
            type: 'list',
            message: 'Who is employees manager?',
            name: 'manager',
            choices: ['Mary Joe', 'Manny Rodriguez', "Sofia Greene", "Owen Wilkins"]
        },
    ])
    .then((data) => {
    // Update employee with sql
    })
};


promptQuestions()
.then((data) => {
    // Switch case and invoke functions
});