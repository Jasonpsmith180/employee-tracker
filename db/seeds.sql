INSERT INTO departments (name)
    VALUES
        ('Sales'),
        ('Engineering'),
        ('Finance'),
        ('Legal');

INSERT INTO roles (title, salary, department_id)
    VALUES
        ('Sales Lead', 120000, 1),
        ('Salesperson', 80000, 1),
        ('Lead Engineer', 140000, 2),
        ('Software Engineer', 120000, 2),
        ('Accountant', 130000, 3),
        ('Legal Team Lead', 225000, 4),
        ('Lawyer', 200000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES
        ('Ronald', 'Firbank', 1, NULL),
        ('Virginia', 'Woolf', 2, 1),
        ('Piers', 'Gaveston', 2, 1),
        ('Charles', 'LeRoi', 3, NULL),
        ('Katherine', 'Mansfield', 4, 4),
        ('Dora', 'Carrington', 4, 4),
        ('Edward', 'Bellamy', 4, 4),
        ('Montague', 'Summers', 5, NULL),
        ('Octavia', 'Butler', 6, NULL),
        ('Unica', 'Zurn', 7, 9);