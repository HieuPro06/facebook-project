const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT;

app.get('/', (req,res) => {
    res.json('Welcome to Facebook backend');
})

app.listen(port, () => {
    console.log(`Facebook backend is running at http://localhost:${port}`);
})