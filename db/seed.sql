INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Sales"),
       ("Finance"),
       ("Legal");
       

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000,2),
       ("Software Engineer",150000,1),
       ("Accountant",70000,3),
       ("Lawyer",180000,4);




INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Robert", "Downey Jr", 4,2),
       ("Monica", "Geller", 3, 1),
       ("Jessica", "Day", 1, 2),
       ("Mercedes", "Sosa", 2,1);

  
INSERT INTO manager (managerName)
VALUES ("Wayne Johnson"),
        ("Samantha Smith");