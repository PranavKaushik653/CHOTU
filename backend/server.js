const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const feedRoute=require("./route/feed");
app.use("/api/feed",feedRoute);

// app.get('/', (req, res) => {
//     res.send("Welcome to CHOTU Grocery Assistant!");
// });

app.listen(5000, () => console.log('Backend running on port 5000'));

