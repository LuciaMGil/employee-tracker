drop database if exists company_db;
create database company_db;

use company_db;

create table department( 
    id INT PRIMARY KEY,
    department_name VARCHAR(30),
    PRIMARY KEY(id)
);

create table roles(
    id INT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id),
    PRIMARY KEY(id)
);
 
create table employee( 
    id INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (manager_id) REFERENCES manager(id),
    PRIMARY KEY(id)
);

CREATE TABLE manager (
  id INT,
  managerName VARCHAR(30),
  PRIMARY KEY (id)
);
  
