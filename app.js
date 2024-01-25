const express = require('express');
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello Worldgit add .');});

app.post("/post", (req, res) => {
    const {userName} = req.body;
    res.send(`Hello ${userName}`)
});

app.put("/put", (req, res) => {
    res.send('This is a put request')
})

app.delete("/delete", (req, res) => {
    res.send('This is a delete request')
})

app.patch("/patch", (req, res) => {
    res.send('This is a patch request')
})

app.listen(port, ()=> {
    console.log("Server is listening on port 4500");
});