const express = require('express');
const router = express.Router();
const pool = require('../config/db.js');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

// New route for login
router.post('/login', [
    check('username').notEmpty().withMessage('Username is required'),
    check('password').notEmpty().withMessage('Password is required'),
], async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    // Check if the user exists in the registration table
    pool.getConnection((err, conn) => {
        if (err) throw err;

        const userCheckQuery = 'SELECT * FROM registration WHERE username = ?';
        conn.query(userCheckQuery, [username], async (err, result) => {
            conn.release();
            if (err) throw err;

            if (result.length === 0) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const hashedPassword = result[0].password;
            const isPasswordMatch = await bcrypt.compare(password, hashedPassword);

            if (!isPasswordMatch) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // If credentials are valid, you can set a session/cookie for authentication
            // or generate a JWT (JSON Web Token) to manage user sessions.

            res.status(200).json({ message: 'Login successful!' });
        });
    });
});

// New route for user registration
router.post('/register', [
    check('username').notEmpty().withMessage('Username is required'),
    check('password').notEmpty().withMessage('Password is required'),
], async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    // Check if the username is already registered
    pool.getConnection((err, conn) => {
        if (err) throw err;

        const userCheckQuery = 'SELECT * FROM registration WHERE username = ?';
        conn.query(userCheckQuery, [username], async (err, result) => {
            if (err) throw err;

            if (result.length > 0) {
                return res.status(400).json({ error: 'Username already exists' });
            }

            // Hash the password before storing it in the database
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            // Save the new user to the registration table
            const insertUserQuery = 'INSERT INTO registration (username, password) VALUES (?, ?)';
            conn.query(insertUserQuery, [username, hashedPassword], (err, result) => {
                conn.release();
                if (err) throw err;

                res.status(200).json({ message: 'Registration successful!' });
            });
        });
    });
});

module.exports = router;
