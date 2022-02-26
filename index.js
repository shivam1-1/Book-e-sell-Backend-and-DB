const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
connectToMongo();

const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use('/register', require('./routes/auth'))
app.use('/login', require('./routes/login'))

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello Shivam');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
