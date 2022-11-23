const express = require('express');
require('dotenv').config();
const userRouter = require('./src/api/v1/routes/userRoute');

// Express set-up
const app = express();
const port = process.env.SERVER_PORT || 3000;
app.use('/user', userRouter);

// FOR TESTING PURPOSES ONLY
app.get('/', (req, res) => {
  res.status(200).send('Kya haal chaal bhai');
});

app.listen(port, (err) => {
  if (err) {
    console.error('An error has occured:', err);
    // eslint-disable-next-line no-useless-return
    return;
  }
  console.log(`Server running at http://localhost:${port}`);
});
