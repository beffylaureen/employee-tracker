USE employees_db;

INSERT INTO department (name)
VALUES 
  ("apparel"),
  ("cosmetics"),
  ("shoes");
  ("coffee shop");

INSERT INTO role (title, salary, department_id)
VALUES
  ("floor manager", 10000.00, 3),
  ("associate", 7500.00, 1),
  ("stock person", 6500.00, 2 ),
  ("fitting room attendant", 7250.00, 1),
  ("security", 6250.00, 3),
  ("barista", 7000.00, 4),
  ("make up artist", 7500.00, 2),
  ("stylist", 8500.00, 1),
  ("pastry chef", 8000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ("Bruce","Wayne", ),
  ("Dick", "Grayson", ),
  ("Peter", "Parker", ),
  ("Jessica", "Jones", ),
  ("Barbara", "Gordon", ),
  ("Selina", "Kyle", ),
  ("Natasha", "Romanoff", ),
  ("Daniel", "Thomas", ),
  ("Jim", "Hammond", ),
  ("Bruce", "Banner", ),
  ("Jennifer", "Walters", ),
  ("Barry", "Allen", ),
  ("Ray", "Palmer", ),
  ("Hal", "Jordan", ),
  ("Maxwell", "Smart", ),
  ("Barney", "Fife", ),
  ("Daphne", "Moon", ),
  ("Roz", "Doyle", ),


