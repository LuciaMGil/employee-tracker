INSERT INTO department (id, department_name)
VALUES (1, "Engineering"),
       (2, "Sales"),
       (3, "Finance"),
       (4, "Legal");
       

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Sales Lead", 100000,2),
       (2, "Software Engineer",150000,1),
       (3, "Accountant",70000,3),
       (4, "Lawyer",180000,4);




INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Robert", "Downey Jr", 4,2),
       (2, "Monica", "Geller", 3, 1),
       (3, "Jessica", "Day", 1, 2),
       (4, "Mercedes", "Sosa", 2,1);

  
INSERT INTO manager (id, managerName)
VALUES (1, "Wayne Johnson"),
        (2, "Samantha Smith");