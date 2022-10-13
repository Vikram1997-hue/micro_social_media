const express = require('express');
require('dotenv').config()
const app = express();
app.use(express.json())
const port = process.env.SERVER_PORT || 3000;

app.listen(port, (err) => {
    if(err) {
        console.log('Error in connection attempt', err);
        return;
    }
    console.log(`Server running at http://localhost:${port}`);
})