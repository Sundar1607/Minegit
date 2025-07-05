// backend/app.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/bmi', (req, res) => {
  const { weight, height } = req.body;
  if (!weight || !height) return res.status(400).send({ error: 'Missing data' });

  const bmi = weight / ((height / 100) ** 2);
  res.json({ bmi: bmi.toFixed(2) });
});

app.listen(PORT, () => {
  console.log(`BMI backend running on http://localhost:${PORT}`);
});
