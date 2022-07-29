drop database if exists company_db;
create database company_db;

use company_db;

create table department( 
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30),
    PRIMARY KEY(id)
);

create table roles(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id),
    PRIMARY KEY(id)
);
 
create table employees( 
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT NULL,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (manager_id) REFERENCES manager(id),
    PRIMARY KEY(id)
);

CREATE TABLE manager (
  id INT NOT NULL AUTO_INCREMENT,
  managerName VARCHAR(30),
  PRIMARY KEY (id)
);
  
