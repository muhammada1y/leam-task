const express = require("express");
const cors = require('cors');
const pool = require('./connect.js');


const app = express();
app.use(cors());
app.use(express.json());

const PORT = 2002;

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
      console.error('Error executing query', err);
  } else {
      console.log('Connected to PostgreSQL. Current timestamp:', res.rows[0].now);
  }
});

app.post('/massage', async (req, res) => {
    try {
      const { email, title, content } = req.body;
      console.log(email, title, content)
      // Ensure user_id is not null before inserting into the database
      if (content !== null && content !== undefined) {

      const query = 'INSERT INTO notes (email, title, content) VALUES ($1, $2, $3) RETURNING *';
      const values = [email, title, content];
      const result = await pool.query(query, values);
      res.json(result.rows[0]);
    } else {
      // Handle the case where content is null
      res.status(400).json({ error: 'Content cannot be null' });
  }
    } catch (error) {
      console.error('Error saving note:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  


  app.listen(PORT, () => {
    console.log("Backend is running on", PORT);
});