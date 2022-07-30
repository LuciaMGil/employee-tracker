const inquirer = require("inquirer");
const mysql = require('mysql2');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tofusombra',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database`)
  );



const promptQuestions = () => {
    return inquirer.prompt([
        {
        type: 'list',
        message: 'What can I help with?',
        name: 'choice',
        choices: [ 
            'View all departments', 
            'View all roles' , 
            'View all employees', 
            'Add a department', 
            'Add a role', 
            'Add an employee', 
            'Update an employee role']
        }
    ])
.then((data) => {
    switch (data.choice) {
        case "View all departments":
            viewAllDepartments();
            break;
        case "View all roles":
            viewAllRoles();
            break;
        case "View all employees":
            viewAllEmployees();
            break;
        case "Add a department":
            addDepartment();
            break;
        case "Add a role":
            addRole();
            break;
        case "Add an employee":
            addEmployee();
            break;
        case "Update an employee role":
            updateEmployee();
            break;
        case "Exit":
            console.log(`Done`);
            break;
    }
});
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
            message: 'Enter corresponding department ID.',
            name: 'department'
        },
    ])
    .then((data) => {
        const newRole = data.roles;
        const salary = data.salary;
        const department = data.department
        var query = `INSERT INTO roles (title, salary, department_id) VALUES ("${newRole}",${salary},${department})`
        connection.query(query, (err, result) =>{
            err ? console.log(err) : console.log("\n"); console.log(`Added ${newRole} to database`); promptQuestions();
        })
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
        const newDepartment = data.department;
        var query = `INSERT INTO department (department_name) VALUES ("${newDepartment}")`
        connection.query(query, (err, result) =>{
            err ? console.log(err) : console.log("\n"); console.log(`Added ${newDepartment} to database`); promptQuestions();
        })
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
            message: 'What is the role ID of the employee?',
            name: 'role',
        },
        {
            type: 'input',
            message: 'What is the ID of the employees manager?',
            name: 'manager',
        },
    ])
    .then((data) => {
        const firstName = data.firstName;
        const lastName = data.lastName;
        const role = data.role;
        const manager = data.manager;

        var query = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("${firstName}","${lastName}",${role},${manager})`
        connection.query(query, (err, result) =>{
            err ? console.log(err) : console.log("\n"); console.log(`Added ${firstName} ${lastName} to database`); promptQuestions();
        })
    })
};

const updateEmployee = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the employees ID number?",
            name: "employeeID",
        },
        {
            type: "input",
            message: "What is the new role ID",
            name: "newRole",
        },
    ])
    .then((data) => {
        const employeeID = data.employeeID;
        const newRole = data.newRole;

        var query = `UPDATE employees SET role_id = ${newRole} where id = ${employeeID}`
        connection.query(query, (err, result) =>{
            err ? console.log(err) : console.log("\n"); console.log(`Updated employee to database`); promptQuestions();
        })
    })
};

const viewAllEmployees = () => {
    const query = `SELECT 
    employees.id AS "ID",
    first_name AS "First Name",
    last_name AS "Last Name",
    role_id AS "Title"
    FROM employees
    `;
    connection.query(query, (err, results) => {
      err? console.log(err): console.log("\n"); console.table(results); promptQuestions();
    });
};

const viewAllDepartments = () => {
    const query = `SELECT 
    id AS "ID", 
    department_name AS "Department Name" 
    FROM department`
    connection.query(query, function (err, results){
        err ? console.log(err) : console.log("\n"); console.table(results); promptQuestions();
        });
    
}

const viewAllRoles = () => {
    const query = `SELECT 
        id AS "ID",
        title AS "Title",
        salary AS "Salary",
        department_id AS "Department"
        FROM roles`
    connection.query(query, function (err, results){
        err ? console.log(err) : console.log("\n"); console.table(results); promptQuestions(); 
    })
}

promptQuestions();