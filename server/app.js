require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const path = require('path');

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve('public/index.html'))
});

app.get('*', (req, res) => {
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`app running on port: ${PORT}`);
});
