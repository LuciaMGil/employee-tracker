const inquirer = require("inquirer");
const mysql = require('mysql2');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database`)
  );



promptQuestions = () => {
    return inquirer.prompt([
        {
        type: 'list',
        message: 'What can I help with?',
        name: 'choice',
        choices: [ 'View all departments', 'View all roles' , 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
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

const viewAllEmployees = () => {
    // console.log(
    //   boxen(
    //     "                            - EMPLOYEES -                             ",
    //     { padding: 1, borderStyle: "double" }
    //   )
    // );
    const query = `SELECT 
    employee.id AS "ID",
    first_name AS "First Name",
    last_name AS "Last Name",
    role_id AS "Title",
    FROM employee
    `;
    connection.query(query, (err, res) => {
      if (err) throw err;
  
      console.table(res);
      console.log(
        `-------------------------------------------------------------------------------`
      );
      promptQuestions();
    });
};

promptQuestions()
.then((data) => {
    switch (data.choice) {
        case "View all departments":
            connection.query('SELECT * FROM department', function (err, results){
                err ? console.log(err) : console.log(results);
            })
            break;
        case "View all roles":
            connection.query('SELECT * FROM roles', function (err, results){
                err ? console.log(err) : console.log(results);
            })
            break;
        case "View all employees":
            viewAllEmployees();
            // console.log(`View all employee`)
            // connection.query('SELECT * FROM employee', function (err, results){
            //     err ? console.log(err) : console.log(results);
            // })
            //  'Add an employee', 'Update an employee role'
            break;
        case "Add a department":
            console.log(`Add a department`);
            break;
        case "Add a role":
            console.log(`Add a role`);
            break;
        case "Add an employee":
            console.log(`Add an employee`);
            break;
        case "Update an employee role":
            console.log(`Update an employee role`);
            break;
        case "Exit":
        
        
            console.log(`Done`);
            break;
    }
});