//controllers/authController.js
const db = require('../config/db');

exports.login = async (req, res, next) => {
  try {
    const { studentNumber, password } = req.body;

    if (!studentNumber || !password) {
      return res.status(400).json({ error: 'Missing student number or password' });
    }

    const [rows] = await db.query(
      'SELECT * FROM students WHERE student_number = ? AND password = ?',
      [studentNumber, password]
    );

    if (rows.length > 0) {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ error: 'Invalid student number or password' });
    }
  } catch (err) {
    console.error('Login error:', err);
    next(err);
  }
};
