USE employees_db;

INSERT INTO department (name)
VALUES 
  ("administration"),
  ("apparel"),
  ("cosmetics"),
  ("shoes"),
  ("coffee shop");

INSERT INTO role (title, salary, department_id)
VALUES
  ("store manager", 10000.00, 1),
  ("associate", 7500.00, 2),
  ("stock person", 6500.00, 4),
  ("fitting room attendant", 7250.00, 2),
  ("security", 6250.00, 1),
  ("barista", 7000.00, 5),
  ("make up artist", 7500.00, 3),
  ("stylist", 8500.00, 2),
  ("pastry chef", 8000, 5),
  ("hospitality manager", 9500.00, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ("Bruce","Wayne", 1, null),
  ("Dick", "Grayson", 4, 1),
  ("Peter", "Parker", 2, 1),
  ("Jessica", "Jones", 6, 1),
  ("Barbara", "Gordon", 3, 1),
  ("Selina", "Kyle", 9, 1),
  ("Natasha", "Romanoff", 8, 1),
  ("Daniel", "Thomas", 7, 1),
  ("Jim", "Hammond", 8, 1),
  ("Bruce", "Banner", 9, 1),
  ("Jennifer", "Walters", 4, 1),
  ("Barry", "Allen", 6, 1),
  ("Ray", "Palmer", 4, 1),
  ("Hal", "Jordan", 10, null),
  ("Maxwell", "Smart", 5, 1),
  ("Barney", "Fife", 5, 1),
  ("Daphne", "Moon", 4, 1),
  ("Roz", "Doyle", 7, 1),
  ("Ethyl", "Mertz", 3, 10),
  ("Lucy", "Ricardo", 2, 1),
  ("Robert", "Petrie", 9, 10),
  ("Sally", "Rogers", 6, 10);


