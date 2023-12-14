CREATE DATABASE task;

\c your_database_name;

CREATE TABLE massage (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL
);
