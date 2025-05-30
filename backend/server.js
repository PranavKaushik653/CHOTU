const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to CHOTU Grocery Assistant!");
});

app.listen(3000, () => console.log('Backend running on port 3000'));
