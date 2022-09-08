INSERT INTO department (department_name)
VALUES  ("Marketing"),
        ("Finance"),
        ("Operations Managment"),
        ("Human Resources"),
        ("IT"),
        ("The Board");

-- INSERT INTO role(title, salary)
    
INSERT INTO role (title, salary, department_id)
VALUES  ("Product Manager", 2, 1 ),
        ("Project Manager", 2, 2),
        ("Human Resources Manager", 2, 4),
        ("Intern", 1, 5),
        ("Help Desk", 2, 5),
        ("System Admin", 2, 5),
        ("Network Admin", 2, 5),
        ("Marketing Manager", 2, 1),
        ("Graphic Designer", 2, 3),
        ("Copywriter", 2, 3),
        ("TheUnderPaidMascot", 4, 1),
        ("CEO", 3, 6),
        ("CFO", 3, 6),
        ("COO", 3, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Peter", "Pan", 1, null ),
        ("John", "Darling", 1, null ),
        ("Mary", "Darling", 1, null ),
        ("James", "Hook", 1, null ),
        ("Mr", "Smee", 6, 4 ),
        ("Wendy", "Darling", 1, 3),
        ("Peter", "Banning", 1, 1),
        ("Moira", "Banning",  1, 2),
        ("Jack", "Banning",  1, 1),
        ("Dante", "Basco",  1, 1),
        ("Maggie", "Banning",  1, 3),
        ("Isaiah", "Robinson",  1, 2);