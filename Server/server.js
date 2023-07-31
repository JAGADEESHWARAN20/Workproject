const express = require("express");
const pool = require("./config/db"); // Assuming the db.js file is in the same directory as server.js
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

app.post('/signup', (req, res) => {
  const sql = "INSERT INTO registeration (`Username`, `Password`, `fullname`, `email`) VALUES (?, ?, ?, ?)";
  const values = [
    req.body.Username,
    req.body.password,
    req.body.fullname,
    req.body.email
  ];

  console.log(values); // Log the values to see if they are received correctly.

  pool.query(sql, values, (err, data) => {
    if (err) {
      console.error("Error inserting data into the database:", err);
      return res.json({ error: "An error occurred while processing your request." });
    }
    return res.json(data);
  });
});


const PORT = process.env.PORT || 4000;



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  
});
