const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const VERIFY_TOKEN = 'amalia_secret';

app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('Webhook verified');
    res.status(200).send(challenge);
  } else {
    console.log('Verification failed');
    res.status(403).send('Forbidden');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
