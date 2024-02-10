const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/erp')
const con = mongoose.connection
con.on('open', function () {
    console.log("connected ");
})


const PORT = 4000;

app.get("/", (req, res) => {
    res.send("Hello, world!");
})

app.listen(PORT, () => {
    console.log("Server listening " + PORT);
})