CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30),
  phone VARCHAR(15),
  age INTEGER
);

insert  into users(name, email, phone, age) values ('John', 'john@gmail.com', '+911234567890', 25);
insert  into users(name, email, phone, age) values ('James', 'james@gmail.com', '+651234567890', 30);
insert  into users(name, email, phone, age) values ('Tom', 'tom@gmail.com', '+841234567890', 22);
insert  into users(name, email, phone, age) values ('Jack', 'jack@gmail.com', '+41234567890', 20);
insert  into users(name, email, phone, age) values ('Sarah', 'sarah@gmail.com', '+18934567890', 18);
insert  into users(name, email, phone, age) values ('Janet', 'janet@gmail.com', '+911234563450', 45);
