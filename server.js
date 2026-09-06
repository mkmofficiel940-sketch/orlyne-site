const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.get('/api/get-token', (req, res) => {
  res.json({ token: 'ed9139e04050c526fbfd89c32e59a286a40473661038d72897916f595b635ff4' });
});

app.post('/check-numberr2', (req, res) => {
  const { number } = req.body;
  if (!number) {
    return res.status(400).json({ error: 'Numéro de téléphone requis.' });
  }

  res.json({
    banned: false,
    mod_ban: false,
    reason: null,
    violation_label: null
  });
});

app.post('/api/appeal/status', (req, res) => {
  res.json({
    ban_time: null,
    appeal_creation_time: null
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

