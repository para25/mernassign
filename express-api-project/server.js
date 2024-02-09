const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express()

app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("Hello")
// })

app.get('/students', (req, res) => {
    const filePath = path.join(__dirname, 'Data.json');
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).join({ error: "Internal Server Error" });
            return;
        }
        const students = JSON.parse(data);
        res.json(students);
    });
});


app.listen(8080, () => {
    console.log("Started on 8080")
})