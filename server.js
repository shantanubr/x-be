// server.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { generateOAuthHeaders } = require('./oauthHelper');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

app.post('/twitter-api/tweets', async (req, res) => {
    if(process.env.SECRET_CODE_HIGHEST_SECURITY === req.body.secretCode) {
      const twitterApiUrl = 'https://api.twitter.com/2/tweets';

      const method = 'POST';

      const headers = generateOAuthHeaders(twitterApiUrl, 'POST');

      try {
          const response = await fetch(twitterApiUrl, {
          method: method,
          headers: {
              'Content-Type': 'application/json',
              ...headers
          },
          body: JSON.stringify({ text: req.body.text }),
          });

          const data = await response.json();

          res.status(response.status).json(data);

      } catch (error) {
          console.error('Error:', error);
          res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.status(411).json({ error: 'LOL hogya na!' });
    }
});

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
