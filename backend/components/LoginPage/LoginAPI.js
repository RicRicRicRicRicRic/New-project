// components/LoginPage/LoginAPI.js
const router = express.Router();
const db = require('../database/db');

router.post('/login', (req, res) => {
  const { studentNumber, password } = req.body;

  if (!studentNumber || !password) {
    return res.status(400).json({ error: 'Missing student number or password' });
  }

  const query = 'SELECT * FROM students WHERE student_number = ? AND password = ?';
  db.query(query, [studentNumber, password], (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (results.length > 0) {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ error: 'Invalid student number or password' });
    }
  });
});

module.exports = router;
