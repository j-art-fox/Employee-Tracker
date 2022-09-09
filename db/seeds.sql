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
VALUES  ("Peter", "Pan", 12, null ),
        ("John", "Darling", 13, null ),
        ("Mary", "Darling", 14, null ),
        ("James", "Hook", 11, null ),
        ("Mr", "Smee", 6, 4 ),
        ("Wendy", "Darling", 10, 3),
        ("Peter", "Banning", 9, 1),
        ("Moira", "Banning",  8, 2),
        ("Jack", "Banning",  7, 1),
        ("Dante", "Basco",  6, 1),
        ("Maggie", "Banning",  4, 3),
        ("Isaiah", "Robinson",  3, 2),
        ("Rodger", "Banning",  2, 3),
        ("Francis", "Robinson",  1, 2);